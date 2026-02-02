import Container from "../components/Container"
/* import  WomanShop  from "../assets/woman-shop.jpg" */
import GirlWithHeadset from "../assets/images/girl-with-headset.jpg"
import { Heart, ShoppingCart, Minus, Plus } from "lucide-react"
import Button from "../components/Button"
import ProductCard from "../components/ProductCard"
import  WomanShop  from "../assets/images/woman-shop.jpg"
import  WomanWithGlasses  from "../assets/images/woman-infront-building.jpg"
import GameController from "../assets/images/gaming-controllers.jpg"
import Technology from "../assets/images/technology.jpg"
import SectionTitle from "../components/SectionTitle"

const ProductDetail = () => {
  return (
    <>
      <Container>
        <section className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* LEFT — Product Images */}
          <div className="flex flex-col gap-6">
            {/* Main image */}
            <div className="w-full h-124 rounded-2xl overflow-hidden bg-neutral-100">
              <img
                src={GirlWithHeadset}
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="w-45 h-30 rounded-lg overflow-hidden cursor-pointer hover:border-3 hover:border-secondary-color transition"
                >
                  <img
                    src={GirlWithHeadset}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">

            {/* Category */}
            <span className="text-sm uppercase tracking-wide text-light-gray">
              Electronics
            </span>

            {/* Name */}
            <h1 className="text-4xl font-extrabold text-default-gray">
              Wireless Headset Pro
            </h1>

            {/* Price */}
            <p className="text-3xl font-bold text-primary-color">
              $199.99
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed max-w-xl">
              Experience immersive sound quality with our premium wireless headset,
              designed for comfort, clarity, and long-lasting performance.
            </p>

            {/* Stock */}
            <div className="flex gap-1 items-center">
              <p className="w-3 h-3 rounded-full bg-green-600"></p> 
              <span className="text-sm font-medium">In stock</span>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="font-medium">Quantity in cart</span>

              <div className="flex items-center border border-neutral-200 shadow-xs rounded-lg overflow-hidden">
                <button className="cursor-pointer p-3 hover:bg-neutral-100">
                  <Minus size={16} />
                </button>
                <span className="px-4 font-medium">1</span>
                <button className="cursor-pointer p-3 hover:bg-neutral-100">
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Actions */}
          <div className="flex gap-4 mt-4">
              <Button className="flex-1 bg-primary-color text-xl text-white py-4 rounded-xl font-semibold hover:bg-secondary-color">
                Buy Product
              </Button>
              <button className="cursor-pointer p-4 border border-neutral-200 rounded-xl hover:bg-neutral-100 transition">
                <ShoppingCart />
              </button>
              <button className="cursor-pointer p-4 border border-neutral-200 rounded-xl hover:bg-neutral-100 transition">
                <Heart />
              </button>
          </div>
          </div>

        </section>
      </Container>

      <Container>
        <SectionTitle className="my-8">Similar Products</SectionTitle>
        <div className="w-full max-w-8xl flex flex-wrap gap-12 justify-center">
          <ProductCard
            imageUrl={Technology}
            alt={""} 
            productName={"Latest Latops"}
            categoryName={"Electronics"}
            price={44.9}
          />

          <ProductCard 
            imageUrl={WomanWithGlasses}
            alt={""} 
            productName={"Sun glasses"}
            categoryName={"Fashion"}
            price={49.5}
          />

          <ProductCard 
            imageUrl={WomanShop}
            alt={""} 
            productName={"Nice Jackets"}
            categoryName={"Out fits"}
            price={119.0}
          />
          <ProductCard 
            imageUrl={GameController}
            alt={""} 
            productName={"Newest Gaming Controller"}
            categoryName={"Gaming"}
            price={35}
          />         
        </div>
      </Container>
    </>
  )
}

export default ProductDetail

