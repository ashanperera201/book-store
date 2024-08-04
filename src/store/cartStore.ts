import { Book } from '@/types/book';
import create from 'zustand';

interface CartItem {
    book: Book;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addItem: (book: Book) => void;
    removeItem: (bookId: number) => void;
    updateQuantity: (bookId: number, quantity: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
    items: [],
    addItem: (book) =>
        set((state) => {
            const existingItem = state.items.find((item) => item.book.id === book.id);
            if (existingItem) {
                return {
                    items: state.items.map((item) =>
                        item.book.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            }
            return { items: [...state.items, { book, quantity: 1 }] };
        }),
    removeItem: (bookId) =>
        set((state) => ({
            items: state.items.filter((item) => item.book.id !== bookId),
        })),
    updateQuantity: (bookId, quantity) =>
        set((state) => ({
            items: state.items.map((item) =>
                item.book.id === bookId ? { ...item, quantity } : item
            ),
        })),
}));
