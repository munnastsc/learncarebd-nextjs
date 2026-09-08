import { prisma } from './prisma';
import fs from 'fs';
import path from 'path';

export type PageType = 'ABOUT_US' | 'TERMS_PRIVACY' | 'FOOTER_SETTINGS' | 'FAQ_SETTINGS';

const LOCAL_DATA_DIR = path.join(process.cwd(), 'data');

export async function getDynamicPageContent(type: PageType): Promise<any> {
    try {
        const record = await prisma.customPost.findFirst({
            where: { type }
        });

        if (record && record.content) {
            return JSON.parse(record.content);
        }
    } catch {
        // DB fallback
    }

    const localFile = path.join(LOCAL_DATA_DIR, `${type.toLowerCase()}.json`);
    try {
        if (fs.existsSync(localFile)) {
            const content = fs.readFileSync(localFile, 'utf-8');
            return JSON.parse(content);
        }
    } catch {
        // file fallback
    }

    return null;
}

export async function saveDynamicPageContent(type: PageType, content: any): Promise<any> {
    const jsonStr = JSON.stringify(content, null, 2);

    try {
        const existing = await prisma.customPost.findFirst({
            where: { type }
        });

        if (existing) {
            await prisma.customPost.update({
                where: { id: existing.id },
                data: { content: jsonStr }
            });
        } else {
            await prisma.customPost.create({
                data: {
                    title: type,
                    content: jsonStr,
                    type: type
                }
            });
        }
    } catch (e) {
        console.error('Failed to save to database:', e);
    }

    try {
        if (!fs.existsSync(LOCAL_DATA_DIR)) fs.mkdirSync(LOCAL_DATA_DIR, { recursive: true });
        const localFile = path.join(LOCAL_DATA_DIR, `${type.toLowerCase()}.json`);
        fs.writeFileSync(localFile, jsonStr, 'utf-8');
    } catch (e) {
        console.error('Failed to save to local file:', e);
    }

    return content;
}
