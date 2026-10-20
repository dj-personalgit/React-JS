import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-8 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-gray-800">Advance Routes</h2>

      <ul className="flex space-x-8 text-lg font-medium text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer transition"><Link to='/'>Home</Link></li>
        <li className="hover:text-blue-600 cursor-pointer transition"><Link to='/about'>About</Link></li>
        <li className="hover:text-blue-600 cursor-pointer transition"><Link to='/product'>Product</Link></li>
        <li className="hover:text-blue-600 cursor-pointer transition"><Link to='/courses'>Courses</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar