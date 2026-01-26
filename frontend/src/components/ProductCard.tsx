
import { Link } from 'react-router-dom'
import Button from './Button'
import { Heart, ShoppingCart } from 'lucide-react'

type ProductCardProps = {
    imageUrl : string
    alt? : string
    productName : string
    categoryName : string
    price: number
}

const ProductCard = ({imageUrl, alt, productName, categoryName, price}: ProductCardProps) => {
  return (
    <div className="relative w-75 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition"> 

      {/* Favorite icon */}
      <button
        className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full shadow hover:bg-primary-color hover:text-white transition"
        aria-label="Add to favorites"
      >
        <Heart size={18} />
      </button>
      {/* Image */}
      <Link to={'/product-detail'}>
        <div className="h-90 w-full overflow-hidden cursor-pointer">
          <img
            src={imageUrl}
            alt={alt ? alt : "image here"}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2">

        {/* Product name */}
        <h3 className="text-lg font-semibold text-default-gray">
          {productName}
        </h3>

        {/* Category */}
        <p className="text-sm text-light-gray">
          {categoryName}
        </p>

        {/* Price */}
        <p className="text-xl font-bold text-primary-color">
          ${price}
        </p>

        {/* Button */}
        <Button className="mt-3 bg-primary-color text-white py-2 rounded-lg hover:bg-primary-color/80 transition">
           <ShoppingCart className='inline mx-2'/> Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
