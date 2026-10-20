import Logo from "../components/navbar/Logo"
import NavLinks from "../components/navbar/NavLinks"
import ThemeToggle from "../components/navbar/ThemeToggle"

const Navbar = (prop) => {
    console.log(prop);
    
    return (
        <nav className="w-full bg-white dark:bg-gray-900 shadow-sm fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                <Logo />

                {/* Nav Links */}
                <NavLinks />

                {/* Right Items */}
                <div className="flex items-center gap-4">
                    {/* Theme toggle */}
                    <ThemeToggle theme={prop.theme}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar