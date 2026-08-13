const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  await prisma.customPost.updateMany({
    where: {
      title: {
        contains: 'Free PDF: 300 Most Essential Words',
        mode: 'insensitive'
      }
    },
    data: {
      type: 'BLOG'
    }
  });
  console.log('Posts updated successfully!');
}
main().catch(console.error).finally(() => prisma.$disconnect());
