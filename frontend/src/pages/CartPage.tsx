import { Heart, Minus, Plus, Trash } from 'lucide-react'
import Button from '../components/Button'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import GirlWithHeadset from "../assets/images/girl-with-headset.jpg"
import  WomanWithGlasses  from "../assets/images/woman-infront-building.jpg"
import GameController from "../assets/images/gaming-controllers.jpg"
import { Link } from 'react-router-dom'
/* import Technology from "../assets/technology.jpg" */

const CartPage = () => {
  return (
    <>
      <PageTitle>My Cart</PageTitle>

      <Container>
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Products list */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm p-6 space-y-6">

            {/* Single product */}
            <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-gray-300 pb-6">

              {/* Image */}
              <div className="w-32 h-32 rounded-xl overflow-hidden bg-neutral-100">
                <img
                  src={GirlWithHeadset}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product info */}
              <div className="flex-1 space-y-6">
                <h3 className="text-lg font-semibold text-default-gray">
                  Product name
                </h3>
                <span className="text-xl font-bold text-primary-color">
                  400 FCFA
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-6">
                    <p className="text-lg font-medium text-gray-500 text-right">
                    Total
                    <span className="ml-2 text-xl font-bold text-primary-color">
                        2400 FCFA
                    </span>
                    </p>

                    <div className='flex flex-col sm:flex-row items-center gap-3'>
                    {/* Quantity */}
                        <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden">
                            <button className="p-3 hover:bg-neutral-100 transition">
                                <Minus size={16} />
                            </button>
                            <span className="px-4 font-medium">6</span>
                            <button className="p-3 hover:bg-neutral-100 transition">
                                <Plus size={16} />
                            </button>
                        </div>

                        <button className="p-3 rounded-lg hover:bg-neutral-100 transition text-gray-500 hover:text-primary-color">
                            <Heart size={20} />
                        </button>

                        <button className="p-3 rounded-lg hover:bg-red-50 transition text-red-500">
                        <Trash size={20} />
                        </button>
                    </div>
              </div>
            </div>

            {/* Single product */}
            <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-gray-300 pb-6">

              {/* Image */}
              <div className="w-32 h-32 rounded-xl overflow-hidden bg-neutral-100">
                <img
                  src={WomanWithGlasses}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product info */}
              <div className="flex-1 space-y-6">
                <h3 className="text-lg font-semibold text-default-gray">
                  Product name
                </h3>
                <span className="text-xl font-bold text-primary-color">
                  1000 FCFA
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-6">
                    <p className="text-lg font-medium text-gray-500 text-right">
                    Total
                    <span className="ml-2 text-xl font-bold text-primary-color">
                        2000 FCFA
                    </span>
                    </p>

                    <div className='flex flex-col sm:flex-row items-center gap-3'>
                    {/* Quantity */}
                        <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden">
                            <button className="p-3 hover:bg-neutral-100 transition">
                                <Minus size={16} />
                            </button>
                            <span className="px-4 font-medium">2</span>
                            <button className="p-3 hover:bg-neutral-100 transition">
                                <Plus size={16} />
                            </button>
                        </div>

                        <button className="p-3 rounded-lg hover:bg-neutral-100 transition text-gray-500 hover:text-primary-color">
                            <Heart size={20} />
                        </button>

                        <button className="p-3 rounded-lg hover:bg-red-50 transition text-red-500">
                        <Trash size={20} />
                        </button>
                    </div>
              </div>
            </div>
            
            {/* Single product */}
            <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-gray-300 pb-6">

              {/* Image */}
              <div className="w-32 h-32 rounded-xl overflow-hidden bg-neutral-100">
                <img
                  src={GameController}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product info */}
              <div className="flex-1 space-y-6">
                <h3 className="text-lg font-semibold text-default-gray">
                  Product name
                </h3>
                <span className="text-xl font-bold text-primary-color">
                  300 FCFA
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-6">
                    <p className="text-lg font-medium text-gray-500 text-right">
                    Total
                    <span className="ml-2 text-xl font-bold text-primary-color">
                        1200 FCFA
                    </span>
                    </p>

                    <div className='flex flex-col sm:flex-row items-center gap-3'>
                    {/* Quantity */}
                        <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden">
                            <button className="p-3 hover:bg-neutral-100 transition">
                                <Minus size={16} />
                            </button>
                            <span className="px-4 font-medium">4</span>
                            <button className="p-3 hover:bg-neutral-100 transition">
                                <Plus size={16} />
                            </button>
                        </div>

                        <button className="p-3 rounded-lg hover:bg-neutral-100 transition text-gray-500 hover:text-primary-color">
                            <Heart size={20} />
                        </button>

                        <button className="p-3 rounded-lg hover:bg-red-50 transition text-red-500">
                        <Trash size={20} />
                        </button>
                    </div>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="w-full h-80 lg:w-96 bg-white rounded-2xl shadow-sm p-6 space-y-6 lg:sticky lg:top-24">

            <h2 className="text-xl font-semibold text-default-gray">
              Order Summary
            </h2>

            {/* Subtotal */}
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span>5500 FCFA</span>
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
              <span className="text-primary-color">5500 FCFA</span>
            </div>

            <Link to={''}>
                <Button className="w-full bg-primary-color border-0 text-white py-3 rounded-xl hover:bg-primary-color/80 transition">
                Checkout
                </Button>
            </Link>
          </div>

        </div>
      </Container>
    </>
  )
}

export default CartPage
