// app/(dashboard)/books/page.tsx
import { fetchBooks } from '@/lib/api/services/BookService';
import { BookList } from '@/components/books/BookList';
import { SearchBar } from '@/components/common/SearchBar';

export default async function BooksPage() {
  const books = await fetchBooks();

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <SearchBar />
      </div>
      <BookList books={books} />
    </div>
  );
}
