import { prisma } from './prisma';
import fs from 'fs';
import path from 'path';
import { HomepageSettings, DEFAULT_HOMEPAGE_SETTINGS } from './homepageTypes';

export * from './homepageTypes';

const LOCAL_SETTINGS_FILE = path.join(process.cwd(), 'data', 'homepage-settings.json');

export async function getHomepageSettings(): Promise<HomepageSettings> {
    try {
        const record = await prisma.customPost.findFirst({
            where: { type: 'HOMEPAGE_CONFIG' }
        });

        if (record && record.content) {
            const parsed = JSON.parse(record.content);
            return { ...DEFAULT_HOMEPAGE_SETTINGS, ...parsed };
        }
    } catch {
        // DB fallback
    }

    try {
        if (fs.existsSync(LOCAL_SETTINGS_FILE)) {
            const content = fs.readFileSync(LOCAL_SETTINGS_FILE, 'utf-8');
            return { ...DEFAULT_HOMEPAGE_SETTINGS, ...JSON.parse(content) };
        }
    } catch {
        // file fallback
    }

    return DEFAULT_HOMEPAGE_SETTINGS;
}

export async function saveHomepageSettings(settings: Partial<HomepageSettings>): Promise<HomepageSettings> {
    const updated = { ...DEFAULT_HOMEPAGE_SETTINGS, ...settings };
    const jsonStr = JSON.stringify(updated, null, 2);

    try {
        const existing = await prisma.customPost.findFirst({
            where: { type: 'HOMEPAGE_CONFIG' }
        });

        if (existing) {
            await prisma.customPost.update({
                where: { id: existing.id },
                data: { content: jsonStr }
            });
        } else {
            await prisma.customPost.create({
                data: {
                    title: 'Homepage Settings',
                    content: jsonStr,
                    type: 'HOMEPAGE_CONFIG'
                }
            });
        }
    } catch (e) {
        console.error('Failed to save to database:', e);
    }

    try {
        const dir = path.dirname(LOCAL_SETTINGS_FILE);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(LOCAL_SETTINGS_FILE, jsonStr, 'utf-8');
    } catch (e) {
        console.error('Failed to save to local file:', e);
    }

    return updated;
}
