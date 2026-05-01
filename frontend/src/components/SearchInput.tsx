import { Search } from "lucide-react";
import { useProductStore } from "../features/products/productStore";
import { useDebounce } from "../hooks/useDebounce";
import { useEffect, useState } from "react";

const SearchInput = () => {
  const { setSearch, getProducts } = useProductStore();
  const [value, setValue] = useState("");

  const debounced = useDebounce(value, 500);

  useEffect(() => {
    setSearch(debounced);
    getProducts(1); // reset to page 1 on search
  }, [debounced]);

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search products..."
        className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent transition"
      />
    </div>
  );
};

export default SearchInput;
