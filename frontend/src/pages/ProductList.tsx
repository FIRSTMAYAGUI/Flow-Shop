import Container from "../components/Container"
import ProductCard from "../components/ProductCard"
import SearchInput from "../components/SearchInput"
import SortInput from "../components/SortInput"
import PageTitle from "../components/PageTitle"
import Button from "../components/Button"
//import { fakeProducts } from "../fakeProductData"
import { useProductStore } from "../features/products/productStore"
import { useEffect } from "react"
import type { Products } from "../features/products/productsTypes"
import { MoonLoader } from "react-spinners"

const ProductList = () => {

  const { error, products, pagination, getProducts } = useProductStore();

  useEffect(()=>{
    getProducts();
  }, [getProducts]) 
  console.log('error is:', error);
  console.log('pagination :', pagination?.currentPage);

  return (
    <>
      <PageTitle>OUR PRODUCTS</PageTitle>

      {/* All product cards paginated */}
      <Container>
        <div className="w-full my-4 mb-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          
          {/* product count */}
          <p className="text-lg font-medium text-default-gray">
            {pagination.paginatedProducts} <span className="text-gray-400">of</span> {pagination.totalProducts} products
          </p>

          {/* search + sort */}
          <div className="flex flex-col sm:flex-row gap-8 sm:items-center">
            <SearchInput />
            <SortInput />
          </div>

        </div>
        <div className="w-full max-w-8xl flex flex-wrap gap-12 justify-center ">
          {/* {fakeProducts.map((product) => (
            <ProductCard
              key={product.id}
              image_url={product.image_url}
              alt={product.alt}
              productName={product.productName}
              categoryName={product.categoryName}
              price={product.price}
            />
          ))} */}  

          {products ? products.map((product: Products) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image_url={product.image_url ? product.image_url : null}
              alt={product.name}
              productName={product.name}
              categoryName={product.category.name}
              price={product.price}
            />
          )) : (<MoonLoader size={60} color="#4f8cff"/>)}  
         
        </div>
        {/* pagination UI */}
        <div className="mt-12 flex justify-center items-center gap-3">
          
          {/* Previous */}
          <Button
            className="px-4 py-2 border border-neutral-300 rounded-md text-sm hover:bg-gray-100 transition"
            onClick={() => pagination && getProducts(pagination?.currentPage - 1)}
            disabled={!pagination || pagination?.currentPage === 1 }
          >
            Prev
          </Button>

          {/* Page numbers */}
          <button className="px-4 py-2 rounded-md text-sm border border-neutral-300 bg-primary-color text-white">
            1
          </button>

          <button className="px-4 py-2 rounded-md text-sm border border-neutral-300 hover:bg-gray-100 transition">
            2
          </button>

          <button className="px-4 py-2 rounded-md text-sm border border-neutral-300 hover:bg-gray-100 transition">
            3
          </button>

          <button className="px-4 py-2 rounded-md text-sm border border-neutral-300 hover:bg-gray-100 transition">
            4
          </button>

          <button className="px-4 py-2 rounded-md text-sm border border-neutral-300 hover:bg-gray-100 transition">
            5
          </button>

          {/* Next */}
          <Button
            className="px-4 py-2 border border-neutral-300 rounded-md text-sm hover:bg-gray-100 transition"
            onClick={() => pagination && getProducts(pagination?.currentPage + 1)}
            disabled={pagination?.currentPage === pagination?.lastPage ? true : undefined}
          >
            Next
          </Button>

        </div>

      </Container>
    </>
  )
}

export default ProductList
