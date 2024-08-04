import { useState } from 'react';
import { TextInput } from '@mantine/core';

interface BookSearchProps {
  onSearch: (query: string) => void;
}

const BookSearch: React.FC<BookSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <TextInput
      placeholder="Search for books by title or author"
      value={query}
      onChange={(e) => setQuery(e.currentTarget.value)}
      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
    />
  );
};

export default BookSearch;
