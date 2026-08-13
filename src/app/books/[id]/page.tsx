import { prisma } from '../../../lib/prisma';
import SpokenBookLanding from './SpokenBookLanding';
import { notFound } from 'next/navigation';
import GenericBookDetails from './GenericBookDetails';

export default async function DynamicBookPage({ params }: { params: Promise<{ id: string }> }) {
    // Attempt to fetch from DB
    const book = await prisma.book.findUnique({
        where: { slug: (await params).id }
    });

    // For the original Spoken book page (hardcoded content with 3000 words)
    if ((await params).id === '3000-words') {
        return <SpokenBookLanding />;
    }

    if (!book) {
        return notFound();
    }

    return <GenericBookDetails book={book} />;
}
