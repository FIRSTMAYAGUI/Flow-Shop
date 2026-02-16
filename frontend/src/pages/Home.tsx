import Button from "../components/Button"
import Container from "../components/Container"
import ProductCard from "../components/ProductCard"
import SectionTitle from "../components/SectionTitle"
import  WomanShop  from "../assets/images/woman-shop.jpg"
import  WomanWithGlasses  from "../assets/images/woman-infront-building.jpg"
import GameController from "../assets/images/gaming-controllers.jpg"
import Technology from "../assets/images/technology.jpg"
import Basketball from "../assets/images/basketball.jpg"
import GirlWithHeadset from "../assets/images/girl-with-headset.jpg"
import { Link } from "react-router-dom"
import CategoryCard from "../components/CategoryCard"
import { useAuthStore } from "../features/auth/store/authStore"

const  Home = () => {
  const { user } = useAuthStore();

  return (
    <>
    {/* Product Section */}
      <Container>
        <div className="flex flex-col py-10 gap-18">
          <SectionTitle>Featured Products</SectionTitle>
          <div className="w-full max-w-8xl flex flex-wrap gap-12 justify-center ">
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
              imageUrl={GirlWithHeadset}
              alt={""} 
              productName={"High quality Headsets"}
              categoryName={"Fashion"}
              price={59.9}
            />
            <ProductCard 
            imageUrl={GameController}
            alt={""} 
            productName={"Newest Gaming Controller"}
            categoryName={"Gaming"}
            price={35}
          />
          <ProductCard 
            imageUrl={GirlWithHeadset}
            alt={""} 
            productName={"High quality Headsets"}
            categoryName={"Fashion"}
            price={59.9}
          />
          <ProductCard 
            imageUrl={Basketball}
            alt={""} 
            productName={"Baskeball outfits"}
            categoryName={"Sports"}
            price={20}
          />
          <ProductCard 
            imageUrl={GirlWithHeadset}
            alt={""} 
            productName={"High quality Headsets"}
            categoryName={"Fashion"}
            price={59.9}
          />
          </div>

          <div className="flex justify-center items-center">
            <Link to={'/product'}>
              <Button className="border border-secondary-color text-secondary-color hover:border-primary-color hover:text-primary-color">{user?.fullname}</Button>
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
            <Button className="bg-white text-primary-color font-bold px-8 py-4 rounded-xl hover:bg-gray-100">
              <Link to="/product">Browse Products</Link>
            </Button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
