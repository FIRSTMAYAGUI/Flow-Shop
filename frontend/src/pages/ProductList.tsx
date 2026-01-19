import Container from "../components/Container"
import PageTitle from "../components/PageTitle"
import SortInput from "../components/SortInput"

const ProductList = () => {
  return (
    <>
      <PageTitle>OUR PRODUCTS</PageTitle>

      {/* All product cards paginated */}
      <Container>

        <div>
          {/* Number of products and sort input container */}
          <div className="flex justify-between font-medium items-center">
            <p className="text-2xl">9 of 20 products</p>
            <SortInput/>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ProductList
