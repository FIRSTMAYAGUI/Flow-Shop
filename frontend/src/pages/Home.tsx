import Container from "../components/Container"
import ProductCard from "../components/ProductCard"
import SectionTitle from "../components/SectionTitle"

const  Home = () => {
  return (
    <Container>
      <div className="flex flex-col py-10 gap-18">
        <SectionTitle>Featured Products</SectionTitle>
        <div className="w-full max-w-8xl flex flex-wrap gap-12 justify-center ">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </Container>
  )
}

export default Home
