import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

// Regex to parse bKash Merchant Payment SMS
// Example: "You have received payment Tk 499.00 from 01711223344. Ref: sathi. Fee Tk 0.00. Balance Tk 10500.00. TrxID 9K23J8L4M9 at 24/07/2026 17:35"
const BKASH_AMOUNT_REGEX = /(?:payment\s+Tk|Received\s+Tk)\s*([\d\.]+)/i;
const BKASH_TRXID_REGEX = /TrxID\s+([A-Z0-9]+)/i;

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log('Received SMS webhook payload:', body);

        // Accept common SMS forwarder payloads (from, sender, message, text, content)
        const sender = (body.from || body.sender || '').trim();
        const messageText = (body.message || body.text || body.content || '').trim();

        if (!messageText) {
            return NextResponse.json({ error: 'Message text is empty.' }, { status: 400 });
        }

        // 1. Verify SMS is indeed from bKash (optional check but good for safety)
        const isBkash = sender.toLowerCase().includes('bkash') || messageText.toLowerCase().includes('trxid');
        if (!isBkash) {
            return NextResponse.json({ status: 'ignored', reason: 'Not a bKash message.' });
        }

        // 2. Parse Amount and Transaction ID
        const amountMatch = messageText.match(BKASH_AMOUNT_REGEX);
        const trxMatch = messageText.match(BKASH_TRXID_REGEX);

        if (!trxMatch) {
            return NextResponse.json({ status: 'error', reason: 'Transaction ID not found in message.' });
        }

        const transactionId = trxMatch[1].trim().toUpperCase();
        const amount = amountMatch ? parseFloat(amountMatch[1]) : 0;

        console.log(`Parsed bKash SMS: TrxID=${transactionId}, Amount=${amount}`);

        // 3. Process transaction in Database
        const existing = await prisma.paymentRequest.findUnique({
            where: { transactionId }
        });

        if (existing) {
            if (existing.status === 'APPROVED') {
                return NextResponse.json({ status: 'duplicate', message: 'Transaction already approved.' });
            }

            // User already submitted form, approve it now!
            await prisma.paymentRequest.update({
                where: { transactionId },
                data: { status: 'APPROVED' }
            });

            // Activate User
            await prisma.user.update({
                where: { email: existing.email },
                data: {
                    isSubscribed: true,
                    plan: existing.plan || 'spoken',
                    subscriptionEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
                }
            });

            return NextResponse.json({ status: 'activated', email: existing.email });
        } else {
            // SMS arrived BEFORE user submitted the form.
            // Create a pending request with status APPROVED so user can activate instantly upon form submission.
            await prisma.paymentRequest.create({
                data: {
                    email: 'SMS_WEBHOOK_RECEIVED',
                    transactionId,
                    amount,
                    plan: amount >= 799 ? 'unlimited_chat' : amount >= 499 ? 'ielts_spoken' : 'spoken',
                    status: 'APPROVED'
                }
            });

            return NextResponse.json({ status: 'stored_as_approved', transactionId });
        }

    } catch (err) {
        console.error('Failed to process SMS webhook:', err);
        return NextResponse.json({ error: 'Webhook processing failed.' }, { status: 500 });
    }
}
