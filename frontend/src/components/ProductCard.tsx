import React from 'react'
import Button from './Button'
import WomanShop from "../assets/woman-shop.jpg"
import { ShoppingCart } from 'lucide-react'

const ProductCard = () => {
  return (
    <div className="w-75 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition"> 
      {/* Image */}
      <div className="h-90 w-full overflow-hidden cursor-pointer">
        <img
          src={WomanShop}
          alt="woman-with-shop-bag"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2">

        {/* Product name */}
        <h3 className="text-lg font-semibold text-default-gray">
          Product Name
        </h3>

        {/* Category */}
        <p className="text-sm text-light-gray">
          Category Name
        </p>

        {/* Price */}
        <p className="text-xl font-bold text-primary-color">
          $49.99
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
