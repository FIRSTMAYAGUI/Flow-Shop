import Button from "./Button"

const Hero = () => {
  return (
    <div className="z-10 max-w-xl py-24">
      <h1 className="text-6xl lg:text-7xl font-extrabold text-white">
        Elevate <span className="text-primary-color">Your Shopping</span> Experience
      </h1>

      <p className="mt-6 text-lg lg:text-2xl text-gray-200">
        Discover quality products, unbeatable prices, and fast delivery —
        all in one place.
      </p>

      <div className="mt-8 flex gap-4">
        <Button className="bg-primary-color text-white font-semibold hover:bg-secondary-color border-none">
          Shop Now
        </Button>

        <Button className="text-white border-white hover:border-hover hover:text-hover">
          Explore
        </Button>
      </div>
    </div>
  )
}

export default Hero


