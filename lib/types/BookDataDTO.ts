import { type UUID } from 'crypto';
// es la del dto el BookData
export type BookData = {
  id: UUID;
  title: string;
  coverUrl: string;
  synopsis: string;
  isbn: string;
  year: number;
  authors: string[];
  publishers: string[];
  languages: string[];
  pages: number;
  tags: string[];
};
