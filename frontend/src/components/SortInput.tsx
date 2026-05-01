import { ArrowUpDown } from "lucide-react";
import { useProductStore } from "../features/products/productStore";

const SortInput = () => {
  const { setSort, getProducts } = useProductStore();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
    getProducts(1);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Label */}
      <span className="w-14 text-sm font-medium text-gray-600">
        Sort by
      </span>
      <div className="relative">
        <select onChange={handleChange}
          className="appearance-none w-44 rounded-xl border border-gray-300 bg-white py-2 pl-4 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent transition"
        >
          <option value="newest">Newest</option>
          <option value="price_asc">Price: Low → High</option>
          <option value="price_desc">Price: High → Low</option>
            
        </select>

        {/* Icon */}
        <ArrowUpDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>
  );
};

export default SortInput;