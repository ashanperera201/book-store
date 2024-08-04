import { Card, Image, Text, Button, Group } from "@mantine/core";

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  category: string;
  price: number;
}

interface BookCardProps {
  book: Book;
  onAddToCart: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onAddToCart }) => {
  return (
    <Card shadow="sm" padding="lg">
      <Card.Section>
        <Image src={book.cover} height={160} alt={book.title} />
      </Card.Section>
      <Group style={{ marginBottom: 5, marginTop: 5 }}>
        <Text>{book.title}</Text>
        <Text size="sm" color="dimmed">
          {book.author}
        </Text>
      </Group>
      <Text size="sm">{book.category}</Text>
      <Text size="lg" style={{ fontWeight: 500 }}>
        ${book.price.toFixed(2)}
      </Text>
      <Button
        variant="light"
        color="blue"
        fullWidth
        onClick={() => onAddToCart(book)}
      >
        Add to Cart
      </Button>
    </Card>
  );
};

export default BookCard;
