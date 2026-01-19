import { Search } from "lucide-react"

const SearchInput = () => {
  return (
    <div className="relative w-full max-w-md">
      
      {/* Search Icon */}
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent transition
        "
      />
    </div>
  )
}

export default SearchInput
