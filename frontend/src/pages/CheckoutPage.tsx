import { CreditCard, MapPin } from "lucide-react"
import Button from "../components/Button"
import Container from "../components/Container"
import PageTitle from "../components/PageTitle"

const CheckoutPage = () => {
  return (
    <>
      <PageTitle>Checkout</PageTitle>

      <Container>
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT: Checkout Form */}
          <div className="flex-1 space-y-8">

            {/* Shipping Information */}
            <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary-color" />
                <h2 className="text-xl font-semibold text-default-gray">
                  Shipping Information
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary-color outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary-color outline-none"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary-color outline-none"
                />
                <input
                  type="text"
                  placeholder="Street address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary-color outline-none"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
              <div className="flex items-center gap-3">
                <CreditCard className="text-primary-color" />
                <h2 className="text-xl font-semibold text-default-gray">
                  Payment Method
                </h2>
              </div>

              <div className="space-y-4">
                <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer hover:border-primary-color transition">
                  <input type="radio" name="payment" className="accent-primary-color" />
                  <span className="font-medium text-default-gray">
                    Cash on Delivery
                  </span>
                </label>

                <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer hover:border-primary-color transition">
                  <input type="radio" name="payment" className="accent-primary-color" />
                  <span className="font-medium text-default-gray">
                    Mobile Money
                  </span>
                </label>

                <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer hover:border-primary-color transition">
                  <input type="radio" name="payment" className="accent-primary-color" />
                  <span className="font-medium text-default-gray">
                    Card Payment
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="w-full lg:w-96">
            <div className="sticky top-24 bg-white rounded-2xl shadow-sm p-6 space-y-6">

              <h2 className="text-xl font-semibold text-default-gray">
                Order Summary
              </h2>

              {/* Items */}
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Products (3)</span>
                  <span>12,000 FCFA</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Delivery</span>
                  <span>Free</span>
                </div>
              </div>

              <hr />

              {/* Total */}
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-primary-color">12,000 FCFA</span>
              </div>

              <Button className="w-full bg-primary-color text-white py-3 rounded-xl font-semibold hover:bg-primary-color/90 transition">
                Place Order
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </>
  )
}

export default CheckoutPage
