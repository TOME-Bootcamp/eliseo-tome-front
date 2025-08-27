import type { BookData } from '@/lib/types/BookDataDTO';
import { BookCard } from '@/components/books/BookCard';

type BookListProps = {
  books: BookData[];
};

export function BookList({ books }: BookListProps) {
  if (books.length === 0) {
  }

  return (
    <div className="grid grid-cols-2 gap-[--spacing-lg] sm:grid-cols-3 md:grid-cols-4 md:gap-[--spacing-xl] lg:grid-cols-5">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
