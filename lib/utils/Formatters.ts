export function authorsToString(authors: string[]): string {
  if (!authors || authors.length === 0) {
    return 'Unknown author';
  }
  return authors.join(', ');
}
