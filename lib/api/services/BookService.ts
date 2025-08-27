import type { BookData } from '@/lib/types/BookDataDTO';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8081';

export async function fetchBooks(): Promise<BookData[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/books`, {});

    if (!response.ok) {
      throw new Error(`Failed to fetch books: ${response.statusText}`);
    }

    const books: BookData[] = await response.json();
    return books;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}
