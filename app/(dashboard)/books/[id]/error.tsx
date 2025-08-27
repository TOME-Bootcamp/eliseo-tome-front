'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function BooksError({
  error,
  reset,
}: {
  error: Error & { digest?: string }; //digest es un identificador opcional(no es chat este comentario)
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h2 className="text-2xl font-bold text-red-500">Something went wrong</h2>
      <p className="text-muted-foreground mt-2">We cant load the books</p>
      <Button className="mt-4" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
