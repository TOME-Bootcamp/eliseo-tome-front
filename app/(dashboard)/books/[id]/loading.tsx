// app/(dashboard)/books/loading.tsx
import { Skeleton } from '@/components/ui/skeleton';

export default function BooksLoading() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-6 text-4xl font-bold">Loading Books...</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(8)].map((_, index) => (
          <Skeleton key={index} className="h-[400px] w-full" />
        ))}
      </div>
    </div>
  );
}
