import { prisma } from '../../../lib/prisma';
import SpokenBookLanding from './SpokenBookLanding';
import { notFound } from 'next/navigation';
import GenericBookDetails from './GenericBookDetails';

export default async function DynamicBookPage({ params }: { params: Promise<{ id: string }> }) {
    const param = (await params).id;
    let book = await prisma.book.findUnique({
        where: { slug: param }
    });

    if (!book) {
        book = await prisma.book.findUnique({
            where: { id: param }
        });
    }

    const decodedId = decodeURIComponent((await params).id);
    // For the original Spoken book page (hardcoded content with 3000 words or Bengali slug)
    if (decodedId === '3000-words' || decodedId === 'শিখতেই-হবে-৩০০০-শব্দ') {
        return <SpokenBookLanding />;
    }

    if (!book) {
        return notFound();
    }

    return <GenericBookDetails book={book} />;
}
