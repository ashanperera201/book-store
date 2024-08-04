// components/BookTable.tsx
import * as React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Book } from '../types/book';
import styles from './styles.module.css'; 

const sampleBooks: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    category: 'Classic',
    price: 10.99,
    coverUrl: 'path/to/gatsby.jpg',
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    category: 'Dystopian',
    price: 8.99,
    coverUrl: 'path/to/1984.jpg',
  },
];

const columnHelper = createColumnHelper<Book>();

const columns = [
  columnHelper.accessor('title', {
    header: 'Title',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('author', {
    header: 'Author',
    cell: (info) => <i>{info.getValue()}</i>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('category', {
    header: 'Category',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('price', {
    header: 'Price',
    cell: (info) => `$${info.getValue().toFixed(2)}`,
    footer: (info) => info.column.id,
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: (props) => (
      <button
        onClick={() => alert(`Added ${props.row.original.title} to cart!`)}
        className={styles.addToCartButton}
      >
        Add to Cart
      </button>
    ),
    footer: () => null,
  }),
];

const BookTable: React.FC = () => {
  const [data, setData] = React.useState(() => [...sampleBooks]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.tableContainer}>
      <table className={styles.styledTable}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={styles.tableHeader}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={styles.tableRow}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={styles.tableCell}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id} className={styles.tableFooter}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className={styles.spacing} />
      <button onClick={() => rerender()} className={styles.rerenderButton}>
        Rerender
      </button>
    </div>
  );
};

export default BookTable;
