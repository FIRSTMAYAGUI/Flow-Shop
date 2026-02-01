import Button from '../components/Button'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SearchInput from '../components/SearchInput'
import SortInput from '../components/SortInput'
import { Link } from 'react-router-dom'

const OrdersPage = () => {
  return (
    <>
      <Container>
        <PageTitle>My Orders</PageTitle>

        {/* Search & Sort */}
        <div className="w-full my-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-end">
          <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
            <SearchInput />
            <SortInput />
          </div>
        </div>

        {/* Orders list */}
        <div className="space-y-16">

          {/* Single Order */}
          <div className="bg-white overflow-hidden">

            {/* Order header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 px-6 py-5 bg-neutral-50 mb-8">

              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Date of order
                </p>
                <p className="text-base font-semibold text-default-gray">
                  March 12, 2025
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Total
                </p>
                <p className="text-lg font-bold text-primary-color">
                  12,400 FCFA
                </p>
              </div>

            </div>

            {/* Products table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">

                <thead className="bg-white border-b border-neutral-200">
                  <tr className="text-gray-500">
                    <th className="px-6 py-4 font-medium">Product</th>
                    <th className="px-6 py-4 font-medium">Price</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Payment</th>
                    <th className="px-6 py-4 font-medium text-right">Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b last:border-b-0 border-neutral-200 hover:bg-neutral-50 transition">

                    {/* Product */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                          <img
                            src=""
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium text-default-gray">
                          Wireless Headset
                        </span>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="px-6 py-5 font-semibold text-default-gray">
                      4,200 FCFA
                    </td>

                    {/* Order status */}
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                        Delivered
                      </span>
                    </td>

                    {/* Payment status */}
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                        Paid
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-5 text-right">
                      <Link
                        to="/product-detail"
                        className="inline-flex items-center gap-1 text-primary-color font-medium hover:underline"
                      >
                        View product →
                      </Link>
                    </td>

                  </tr>
                  <tr className="border-b last:border-b-0 border-neutral-200 hover:bg-neutral-50 transition">

                    {/* Product */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                          <img
                            src=""
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium text-default-gray">
                          Wireless Headset
                        </span>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="px-6 py-5 font-semibold text-default-gray">
                      4,200 FCFA
                    </td>

                    {/* Order status */}
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                        Delivered
                      </span>
                    </td>

                    {/* Payment status */}
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                        Paid
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-5 text-right">
                      <Link
                        to="/product-detail"
                        className="inline-flex items-center gap-1 text-primary-color font-medium hover:underline"
                      >
                        View product →
                      </Link>
                    </td>

                  </tr>
                  <tr className="border-b last:border-b-0 border-neutral-200 hover:bg-neutral-50 transition">

                    {/* Product */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                          <img
                            src=""
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium text-default-gray">
                          Wireless Headset
                        </span>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="px-6 py-5 font-semibold text-default-gray">
                      4,200 FCFA
                    </td>

                    {/* Order status */}
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                        Delivered
                      </span>
                    </td>

                    {/* Payment status */}
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                        Paid
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-5 text-right">
                      <Link
                        to="/product-detail"
                        className="inline-flex items-center gap-1 text-primary-color font-medium hover:underline"
                      >
                        View product →
                      </Link>
                    </td>

                  </tr>
                </tbody>

              </table>
            </div>

          </div>
          {/* Single Order */}
          <div className="bg-white overflow-hidden mt-4">

            {/* Order header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 px-6 py-5 bg-neutral-50 mb-8">

              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Order placed
                </p>
                <p className="text-base font-semibold text-default-gray">
                  March 12, 2025
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Total
                </p>
                <p className="text-lg font-bold text-primary-color">
                  12,400 FCFA
                </p>
              </div>

            </div>

            {/* Products table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">

                <thead className="bg-white border-b border-neutral-200">
                  <tr className="text-gray-500">
                    <th className="px-6 py-4 font-medium">Product</th>
                    <th className="px-6 py-4 font-medium">Price</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Payment</th>
                    <th className="px-6 py-4 font-medium text-right">Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b last:border-b-0 border-neutral-200 hover:bg-neutral-50 transition">

                    {/* Product */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                          <img
                            src=""
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium text-default-gray">
                          Wireless Headset
                        </span>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="px-6 py-5 font-semibold text-default-gray">
                      4,200 FCFA
                    </td>

                    {/* Order status */}
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                        Delivered
                      </span>
                    </td>

                    {/* Payment status */}
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                        Paid
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-5 text-right">
                      <Link
                        to="/product-detail"
                        className="inline-flex items-center gap-1 text-primary-color font-medium hover:underline"
                      >
                        View product →
                      </Link>
                    </td>

                  </tr>
                  <tr className="border-b last:border-b-0 border-neutral-200 hover:bg-neutral-50 transition">

                    {/* Product */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                          <img
                            src=""
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium text-default-gray">
                          Wireless Headset
                        </span>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="px-6 py-5 font-semibold text-default-gray">
                      4,200 FCFA
                    </td>

                    {/* Order status */}
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                        Delivered
                      </span>
                    </td>

                    {/* Payment status */}
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                        Paid
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-5 text-right">
                      <Link
                        to="/product-detail"
                        className="inline-flex items-center gap-1 text-primary-color font-medium hover:underline"
                      >
                        View product →
                      </Link>
                    </td>

                  </tr>
                  <tr className="border-b last:border-b-0 border-neutral-200 hover:bg-neutral-50 transition">

                    {/* Product */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                          <img
                            src=""
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium text-default-gray">
                          Wireless Headset
                        </span>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="px-6 py-5 font-semibold text-default-gray">
                      4,200 FCFA
                    </td>

                    {/* Order status */}
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                        Delivered
                      </span>
                    </td>

                    {/* Payment status */}
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                        Paid
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-5 text-right">
                      <Link
                        to="/product-detail"
                        className="inline-flex items-center gap-1 text-primary-color font-medium hover:underline"
                      >
                        View product →
                      </Link>
                    </td>

                  </tr>
                </tbody>

              </table>
            </div>

          </div>
        </div>

        {/* pagination UI */}
        <div className="mt-12 flex justify-center items-center gap-3">
          
          {/* Previous */}
          <Button
            className="px-4 py-2 border border-neutral-300 rounded-md text-sm hover:bg-gray-100 transition"
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
          >
            Next
          </Button>

        </div>
      </Container>
    </>
  )
}

export default OrdersPage
