import { useState } from "react";
import { Select, MultiSelect, NumberInput } from "@mantine/core";

interface BookFilterSortProps {
  onFilterSort: (
    filters: { category: string[]; priceRange: [number, number] },
    sortBy: string
  ) => void;
}

const BookFilterSort: React.FC<BookFilterSortProps> = ({ onFilterSort }) => {
  const [category, setCategory] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState("");

  const handleApplyFilters = () => {
    onFilterSort({ category, priceRange }, sortBy);
  };

  return (
    <div>
      <MultiSelect
        data={["Fiction", "Non-Fiction", "Science", "Fantasy"]}
        placeholder="Select categories"
        value={category}
        onChange={setCategory}
      />
      <NumberInput
        label="Min Price"
        value={priceRange[0]}
        onChange={(value) => {
          const minPrice = +value || 0;
          setPriceRange([minPrice, priceRange[1]]);
        }}
        min={0}
      />
      <NumberInput
        label="Max Price"
        value={priceRange[1]}
        onChange={(value) => {
          const maxPrice = +value || 100;
          setPriceRange([priceRange[0], maxPrice]);
        }}
        min={0}
      />
      <Select
        data={["Title", "Author", "Price"]}
        placeholder="Sort by"
        value={sortBy}
        onChange={(value) => setSortBy(value || "")}
      />
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default BookFilterSort;
