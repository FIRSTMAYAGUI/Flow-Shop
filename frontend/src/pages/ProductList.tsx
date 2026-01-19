import Container from "../components/Container"
import PageTitle from "../components/PageTitle"
import SearchInput from "../components/SearchInput"
import SortInput from "../components/SortInput"

const ProductList = () => {
  return (
    <>
      <PageTitle>OUR PRODUCTS</PageTitle>

      {/* All product cards paginated */}
      <Container>
        <div className="w-full flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          
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
      </Container>
    </>
  )
}

export default ProductList
