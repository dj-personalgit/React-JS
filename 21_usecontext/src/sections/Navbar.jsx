import Logo from "../components/Navbar/Logo"
import NavLinks from "../components/Navbar/NavLinks"
import ThemeToggle from "../components/Navbar/ThemeToggle"


const Navbar = () => {   
    return (
        <nav className="w-full bg-white dark:bg-gray-900 shadow-sm fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                <Logo />

                {/* Nav Links */}
                <NavLinks />
                
                {/* Right Items */}
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 rounded-lg border border-gray-300 dark:border-gray-700">
                        <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-200 mb-1"></div>
                        <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-200 mb-1"></div>
                        <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-200"></div>
                    </button>

                    {/* Theme toggle */}
                    
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}

export default Navbar