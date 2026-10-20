import { Link, Outlet } from "react-router-dom"

const Product = () => {
  return (
    <div className="py-4 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
      <div className="flex justify-center gap-10">
        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <Link to='/product/mens'>View Men's Collection</Link>
        </button>

        <button className="px-5 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
          <Link to='/product/womens'>View Women's Collection</Link>
        </button>
      </div>
      <Outlet />
    </div>
  )
}

export default Product