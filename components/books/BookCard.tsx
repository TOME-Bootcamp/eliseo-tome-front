import type { BookData } from '@/lib/types/BookDataDTO';
import Image from 'next/image';
import { Card, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

type BookCardProps = {
  book: BookData;
};

export function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book.id}`}>
      <Card className="rounded-[--radius-md] border-none shadow-[--shadow-sm] transition-shadow duration-300 hover:shadow-lg">
        <CardHeader className="p-4 pb-0">
          <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md">
            <Image
              src={book.coverUrl}
              alt={book.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
