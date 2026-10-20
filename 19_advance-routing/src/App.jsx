import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import NotFound from "./pages/NotFound"
import Courses from "./pages/Courses"
import Mens from "./pages/products (nested route)/Mens"
import Womens from "./pages/products (nested route)/Womens"
import Cdetail from "./pages/courses (dynamic route)/Cdetail"



const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />}>
            <Route path="mens" element={<Mens />} />
            <Route path="womens" element={<Womens />} />
          </Route>

          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<Cdetail />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App