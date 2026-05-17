import { Heart, Minus, Plus, Trash } from 'lucide-react'
import Button from '../components/Button'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import { Link } from 'react-router-dom'
import { useCartStore } from '../features/cart/cartStore'
/* import Technology from "../assets/technology.jpg" */

const CartPage = () => {

  const {
  cartItems,
  totalPrice,
  addToCart,
  removeItem,
  deleteProduct,
} = useCartStore();
  console.log( cartItems)

  return (
    <>
      <PageTitle>My Cart</PageTitle>

      <Container>
        {
          cartItems.length === 0 ? (<div className="py-20 text-center flex flex-col items-center gap-6">
            <h2 className="text-3xl font-bold text-light-gray">
              Your cart is empty
            </h2>
            
            <Link to="/products">
              <Button className="bg-primary-color text-white px-8 py-3 rounded-lg hover:bg-primary-color/80 transition shadow-md">
                Continue Shopping
              </Button>
            </Link>
          </div>)
          :
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Products list */}
            <div className="flex-1 bg-white rounded-2xl shadow-sm p-6 space-y-6">

              {
                cartItems.map((item) => (
                <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-gray-300 pb-6">

                  {/* Image */}
                  <Link to={`/product/${item.product.id}`}>
                    <div className="w-32 h-32 rounded-xl overflow-hidden bg-neutral-100 cursor-pointer">
                      <img
                        src={item.product.image_url || ""}
                        alt={item.product.name || ""}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  {/* Product info */}
                  <div className="flex-1 space-y-6">
                    <h3 className="text-lg font-semibold text-default-gray">
                      {item.product.name}
                    </h3>
                    <span className="text-xl font-bold text-primary-color">
                      {item.product.price} FCFA
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-6">
                    <p className="text-lg font-medium text-gray-500 text-right">
                    Total
                      <span className="ml-2 text-xl font-bold text-primary-color">
                        {item.cartQuantity * item.subTotalPrice} FCFA
                      </span>
                    </p>

                    <div className='flex flex-col sm:flex-row items-center gap-3'>
                      {/* Quantity */}
                      <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden">
                        <button className="p-3 hover:bg-neutral-100 transition" onClick={()=>removeItem(item.product.id)}>
                          <Minus size={16} />
                        </button>
                        <span className="px-4 font-medium">{item.cartQuantity}</span>
                        <button className="p-3 hover:bg-neutral-100 transition" onClick={()=>addToCart(item.product)}>
                          <Plus size={16} />
                        </button>
                      </div>

                      <button className="p-3 rounded-lg hover:bg-neutral-100 transition text-gray-500 hover:text-primary-color">
                        <Heart size={20} />
                      </button>

                      <button className="p-3 rounded-lg hover:bg-red-50 transition text-red-500" onClick={()=>deleteProduct(item.product.id)}>
                        <Trash size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                ))
              }
              
            </div>

            {/* Order summary */}
            <div className="w-full h-80 lg:w-96 bg-white rounded-2xl shadow-sm p-6 space-y-6 lg:sticky lg:top-24">

              <h2 className="text-xl font-semibold text-default-gray">
                Order Summary
              </h2>

              {/* Subtotal */}
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>{totalPrice} FCFA</span>
              </div>

              {/* Delivery */}
              <div className="flex justify-between text-gray-500">
                <span>Delivery fee</span>
                <span>Free</span>
              </div>

              <hr className='border border-gray-200'/>

              {/* Total */}
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-primary-color">{totalPrice} FCFA</span>
              </div>

              <Link to='/checkout'>
                <Button className="w-full bg-primary-color border-0 text-white py-3 rounded-xl hover:bg-primary-color/80 transition">
                Checkout
                </Button>
              </Link>
            </div>
          </div>
        }
      </Container>
    </>
  )
}

export default CartPage
