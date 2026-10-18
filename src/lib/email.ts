export interface EmailPayload {
    to: string;
    subject: string;
    html: string;
    text?: string;
}

export async function sendEmail({ to, subject, html, text }: EmailPayload): Promise<boolean> {
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL || 'notifications@learncarebd.com';

    // If Resend API Key is available, send via Resend API
    if (resendApiKey) {
        try {
            const res = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${resendApiKey}`,
                },
                body: JSON.stringify({
                    from: fromEmail,
                    to,
                    subject,
                    html,
                    text: text || html.replace(/<[^>]+>/g, ' '),
                }),
            });
            return res.ok;
        } catch (err) {
            console.error('Failed to send email via Resend:', err);
            return false;
        }
    }

    // Graceful fallback for local development or when API key is pending
    console.log(`[EMAIL DISPATCH] To: ${to} | Subject: ${subject}`);
    return true;
}

export async function notifyAdminNewOrder(data: {
    email: string;
    plan: string;
    amount: number;
    transactionId: string;
}) {
    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || process.env.ADMIN_EMAIL || 'learncareofficial@gmail.com';
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    const html = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 16px;">
            <h2 style="color: #0f172a; margin-top: 0;">🔔 নতুন পেমেন্ট রিকোয়েস্ট এসেছে!</h2>
            <p style="color: #475569;">LearnCareBD প্ল্যাটফর্মে নতুন সাবস্ক্রিপশন অর্ডার জমা হয়েছে:</p>
            
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 10px; margin: 15px 0;">
                <p style="margin: 6px 0;"><strong>👤 শিক্ষার্থী ইমেইল:</strong> ${data.email}</p>
                <p style="margin: 6px 0;"><strong>📦 প্ল্যান:</strong> ${data.plan}</p>
                <p style="margin: 6px 0;"><strong>💰 টাকার পরিমাণ:</strong> ৳${data.amount} BDT</p>
                <p style="margin: 6px 0;"><strong>🧾 Transaction ID:</strong> ${data.transactionId}</p>
            </div>

            <a href="${appUrl}/ai-26/orders" style="display: inline-block; background-color: #4f46e5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; margin-top: 10px;">
                অর্ডার Approve করুন ↗
            </a>
        </div>
    `;

    return sendEmail({
        to: adminEmail,
        subject: `🔔 নতুন কোর্স অর্ডার: ${data.email} (৳${data.amount})`,
        html,
    });
}

export async function notifyAdminNewBookOrder(data: {
    customerName: string;
    phone: string;
    address: string;
    bookTitle: string;
    quantity: number;
    totalAmount: number;
}) {
    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || process.env.ADMIN_EMAIL || 'learncareofficial@gmail.com';
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    const html = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 16px;">
            <h2 style="color: #0f172a; margin-top: 0;">📚 নতুন বইয়ের অর্ডার এসেছে!</h2>
            <p style="color: #475569;">LearnCareBD বুক স্টোরে নতুন অর্ডার জমা হয়েছে:</p>
            
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 10px; margin: 15px 0;">
                <p style="margin: 6px 0;"><strong>👤 ক্রেতার নাম:</strong> ${data.customerName}</p>
                <p style="margin: 6px 0;"><strong>📞 মোবাইল নম্বর:</strong> ${data.phone}</p>
                <p style="margin: 6px 0;"><strong>🏠 ডেলিভারি ঠিকানা:</strong> ${data.address}</p>
                <p style="margin: 6px 0;"><strong>📖 বই:</strong> ${data.bookTitle} (x${data.quantity})</p>
                <p style="margin: 6px 0;"><strong>💰 মোট মূল্য:</strong> ৳${data.totalAmount} BDT</p>
            </div>

            <a href="${appUrl}/ai-26/store/orders" style="display: inline-block; background-color: #0d9488; color: white; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; margin-top: 10px;">
                বুক অর্ডার ম্যানেজ করুন ↗
            </a>
        </div>
    `;

    return sendEmail({
        to: adminEmail,
        subject: `📚 নতুন বই অর্ডার: ${data.customerName} - ${data.bookTitle} (৳${data.totalAmount})`,
        html,
    });
}

export async function notifyStudentApproval(data: {
    email: string;
    plan: string;
}) {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    const html = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 16px;">
            <h2 style="color: #10b981; margin-top: 0;">🎉 আপনার সাবস্ক্রিপশন সফলভাবে সক্রিয় হয়েছে!</h2>
            <p style="color: #475569;">অভিনন্দন! আপনার LearnCareBD AI প্ল্যাটফর্মের সাবস্ক্রিপশন অনুমোদন করা হয়েছে।</p>
            
            <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 15px; border-radius: 10px; margin: 15px 0;">
                <p style="margin: 6px 0; color: #166534;"><strong>📦 একটিভ প্ল্যান:</strong> ${data.plan}</p>
                <p style="margin: 6px 0; color: #166534;"><strong>⏳ মেয়াদ:</strong> ৩০ দিন (Full Pro Access)</p>
                <p style="margin: 6px 0; color: #166534;"><strong>🔑 লগইন ইমেইল:</strong> ${data.email}</p>
            </div>

            <p style="color: #475569;">এখনই লগইন করে আপনার স্পোকেন ইংলিশ ও আইইএলটিএস প্রস্তুতি শুরু করুন:</p>

            <a href="${appUrl}/dashboard" style="display: inline-block; background-color: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin-top: 10px;">
                ড্যাশবোর্ডে প্রবেশ করুন ↗
            </a>
            
            <p style="margin-top: 25px; font-size: 12px; color: #94a3b8;">যেকোনো প্রয়োজনে আমাদের WhatsApp সাপোর্ট (+8801714740430) এ যোগাযোগ করুন।</p>
        </div>
    `;

    return sendEmail({
        to: data.email,
        subject: `🎉 সাবস্ক্রিপশন কনফার্মেশন - LearnCareBD AI`,
        html,
    });
}
