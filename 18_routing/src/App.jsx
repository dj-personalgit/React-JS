import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

const App = () => {
    return (
        <div>
            <nav className="w-full bg-white shadow-md py-4">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* Logo */}
                    <div className="text-2xl font-semibold text-gray-800">
                        Routes
                    </div>
                    

                    {/* Menu */}
                    <ul className="flex gap-10 text-lg font-medium text-gray-700">
                        <li className="hover:text-black transition cursor-pointer"><Link to='/'>Home</Link></li>
                        <li className="hover:text-black transition cursor-pointer"><Link to='/about'>About</Link></li>
                        <li className="hover:text-black transition cursor-pointer"><Link to='/contact-Us'>Contact</Link></li>
                    </ul>

                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-Us" element={<Contact />} />
            </Routes>

        </div>
    )
}

export default App