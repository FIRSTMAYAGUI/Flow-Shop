import Button from "../components/Button"
import Container from "../components/Container"
import ProductCard from "../components/ProductCard"
import SectionTitle from "../components/SectionTitle"
import  WomanShop  from "../assets/images/woman-shop.jpg"
import GameController from "../assets/images/gaming-controllers.jpg"
import Technology from "../assets/images/technology.jpg"
import Basketball from "../assets/images/basketball.jpg"
import { Link } from "react-router-dom"
import CategoryCard from "../components/CategoryCard"
import { useProductStore } from "../features/products/productStore"
import { useEffect } from "react"
import { MoonLoader } from "react-spinners"
import type { Product } from "../features/products/productsTypes"

const  Home = () => {
  const {
      products,
      loading,
      getProducts,
    } = useProductStore();
  
    useEffect(() => {
      getProducts(1);
    }, [getProducts]);

    if(loading) return <div className='h-screen flex justify-center items-center'>
            <MoonLoader size={60} color="#4f8cff"/>
          </div>

  return (
    <>
    {/* Product Section */}
      <Container>
        <div className="flex flex-col py-10 gap-18">
          <SectionTitle>Featured Products</SectionTitle>
          <div className="w-full max-w-8xl flex flex-wrap gap-12 justify-center ">
            {products?.map((product: Product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image_url={product.image_url ? product.image_url : null}
              alt={product.name}
              productName={product.name}
              categoryName={product.category.name}
              price={product.price}
            />))}
          </div>

          <div className="flex justify-center items-center">
            <Link to={'/products'}>
              <Button className="border border-secondary-color text-secondary-color hover:border-primary-color hover:text-primary-color">See More</Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* Categories Section */}
      <Container>
        <div className="flex flex-col py-10 gap-18">
          <SectionTitle>Popular Categories</SectionTitle>
          <div className="w-full flex flex-wrap gap-12 justify-center ">
            <CategoryCard
            imageUrl = {Basketball}
            alt = {''}
            categoryName = {'Sports'}
            />
            <CategoryCard
            imageUrl = {Technology}
            alt = {''}
            categoryName = {'Electronics'}
            />
            <CategoryCard
            imageUrl = {WomanShop}
            alt = {''}
            categoryName = {'Fashion'}
            />
            <CategoryCard
            imageUrl = {GameController}
            alt = {''}
            categoryName = {'Gaming'}
            />
          </div>
        </div>
      </Container>

      {/* CTA section */}
      <Container>
        <div className="w-full rounded-2xl p-16 bg-linear-to-r from-primary-color to-hover text-white">
          <h2 className="text-5xl font-extrabold max-w-2xl">
            Ready to Upgrade Your Shopping Experience?
          </h2>

          <p className="mt-6 text-lg max-w-xl opacity-90">
            Shop smarter with curated products, fast delivery, and exclusive deals.
          </p>

          <div className="mt-8">
            <Link to="/product">
              <Button className="bg-white text-primary-color font-bold px-8 py-4 rounded-xl hover:bg-gray-100">Browse Products</Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
