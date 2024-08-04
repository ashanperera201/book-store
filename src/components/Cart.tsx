import { useCartStore } from "../store/cartStore";
import { Book } from "../types/book";

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity } = useCartStore();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 && <p>Your cart is empty</p>}
      {items.map((item) => (
        <div key={item.book.id}>
          <h3>{item.book.title}</h3>
          <p>Quantity: {item.quantity}</p>
          <button
            onClick={() => updateQuantity(item.book.id, item.quantity + 1)}
          >
            +
          </button>
          <button
            onClick={() => updateQuantity(item.book.id, item.quantity - 1)}
          >
            -
          </button>
          <button onClick={() => removeItem(item.book.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
