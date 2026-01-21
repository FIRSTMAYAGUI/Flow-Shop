import Container from "../components/Container"
import PageTitle from "../components/PageTitle"
import ProductCard from "../components/ProductCard"
import SearchInput from "../components/SearchInput"
import SortInput from "../components/SortInput"
import  WomanShop  from "../assets/woman-shop.jpg"
import  WomanWithGlasses  from "../assets/woman-infront-building.jpg"
import GameController from "../assets/gaming-controllers.jpg"
import Technology from "../assets/technology.jpg"
import GirlWithHeadset from "../assets/girl-with-headset.jpg"

const Favorites = () => {
  return (
    <>
      <PageTitle>MY FAVORITES</PageTitle>

      {/* All product cards paginated */}
      <Container>
        <div className="w-full my-4 mb-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Left: product count */}
          <p className="text-lg font-medium text-default-gray">
            9 <span className="text-gray-400">of</span> 20 products
          </p>

          {/* Right: search + sort */}
          <div className="flex flex-col sm:flex-row gap-8 sm:items-center">
            <SearchInput />
            <SortInput />
          </div>

        </div>
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
        </div>
      </Container>
    </>
  )
}

export default Favorites
