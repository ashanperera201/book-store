import { useState } from "react";
import { Layout } from "../components/Layout";
import BookTable from "../components/BookTable";
import BookSearch from "../components/BookSearch";
import { sampleBooks } from "../data/book-data";
import { Book } from "../types/book";

const HomePage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>(sampleBooks);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Layout>
      <BookSearch onSearch={handleSearch} />
      <BookTable/>
    </Layout>
  );
};

export default HomePage;
