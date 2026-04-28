
import { Link } from 'react-router-dom'
import Button from './Button'
import { Heart, ShoppingCart } from 'lucide-react'

type ProductCardProps = {
  id : string | number
  image_url : string | null
  alt? : string
  productName : string
  categoryName : string | number
  price: number
}

const ProductCard = ({id, image_url, alt, productName, categoryName, price}: ProductCardProps) => {
  return (
    <div className="relative w-75 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition"> 

      {/* Favorite icon */}
      <button className="absolute top-4 right-4 z-10 bg-white/90 rounded-full hover:text-primary-color transition p-2 hover:bg-neutral-100 text-gray-500"
        aria-label="Add to favorites"
      >
        <Heart size={20} />
      </button>
      {/* Image */}
      <Link to={`/product/${id}`}>
        <div className="h-90 w-full overflow-hidden cursor-pointer">
          <img
            src={image_url ?? undefined} 
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
