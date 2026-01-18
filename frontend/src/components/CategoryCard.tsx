
type CategoryProps = {
    imageUrl : string
    alt? : string
    categoryName : string
}

const CategoryCard = ({imageUrl, alt, categoryName}: CategoryProps) => {
  return (
    <div className='w-80 bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-105 duration-300'>
      <div className="h-80 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={alt ? alt : "image here"}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="w-full font-medium text-2xl p-8 text-center text-default-black">
        {categoryName}
      </p>
    </div>
  )
}

export default CategoryCard
