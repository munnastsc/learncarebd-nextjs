const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
    // 1. Update fallback file
    const tsPath = path.join(__dirname, 'src', 'lib', 'homepageTypes.ts');
    let tsContent = fs.readFileSync(tsPath, 'utf8');
    
    // update prices in TS file
    tsContent = tsContent.replace(/price: '30,000'/g, "price: '50,000'");
    tsContent = tsContent.replace(/price: '5,000'/g, "price: '10,000'");
    fs.writeFileSync(tsPath, tsContent);
    console.log('Updated fallback TS file prices.');

    // 2. Update Database for homepage settings
    const homepageSettings = await prisma.homepageSettings.findFirst();
    if (homepageSettings && homepageSettings.data) {
        let data = homepageSettings.data;
        if (data.courses && data.courses.items) {
            data.courses.items = data.courses.items.map(item => {
                if (item.id === 'mentorship') {
                    item.price = '50,000';
                }
                if (item.id === 'bootcamp') {
                    item.price = '10,000';
                }
                return item;
            });
            await prisma.homepageSettings.update({
                where: { id: homepageSettings.id },
                data: { data }
            });
            console.log('Updated homepage prices in DB.');
        }
    }

    // 3. Update Footer settings in DB to remove Admin link
    const footerData = await prisma.customPost.findUnique({
        where: { slug: 'FOOTER_SETTINGS' }
    });
    
    if (footerData && footerData.content) {
        try {
            let content = JSON.parse(footerData.content);
            if (content.columns) {
                content.columns = content.columns.map(col => {
                    if (col.links) {
                        col.links = col.links.filter(l => l.url !== '/ai-26/login' && l.label !== 'অ্যাডমিন প্যানেল');
                    }
                    return col;
                });
                await prisma.customPost.update({
                    where: { slug: 'FOOTER_SETTINGS' },
                    data: { content: JSON.stringify(content) }
                });
                console.log('Removed Admin link from footer settings in DB.');
            }
        } catch (e) {
            console.error('Error parsing footer content:', e);
        }
    }

    // 4. Update Footer fallback in Footer.tsx
    const footerPath = path.join(__dirname, 'src', 'components', 'Footer.tsx');
    if (fs.existsSync(footerPath)) {
        let footerContent = fs.readFileSync(footerPath, 'utf8');
        footerContent = footerContent.replace(/{ label: 'অ্যাডমিন প্যানেল', url: '\/ai-26\/login' },/g, '');
        fs.writeFileSync(footerPath, footerContent);
        console.log('Removed Admin link from Footer.tsx fallback.');
    }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
