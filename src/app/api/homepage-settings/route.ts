import { NextResponse } from 'next/server';
import { getHomepageSettings, saveHomepageSettings } from '../../../lib/homepageSettings';

export async function GET() {
    try {
        const settings = await getHomepageSettings();
        return NextResponse.json(settings);
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const updated = await saveHomepageSettings(body);
        return NextResponse.json({ success: true, settings: updated });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
