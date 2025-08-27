import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative mx-auto max-w-6xl">
      <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
      <Input
        type="text"
        placeholder="Search by title, author or ISBN"
        className="h-15 w-full pl-9 text-lg"
      />
    </div>
  );
}
