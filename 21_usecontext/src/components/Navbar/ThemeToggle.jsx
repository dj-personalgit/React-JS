import { useContext } from "react"
import { ThemeDataContext } from "../../context/ThemeContext"
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {

  const [theme, setTheme] = useContext(ThemeDataContext)

  const changeTheme = () => {
    setTheme(prev => (prev === "Light" ? "dark" : "Light"));
    console.log(theme, setTheme);
  }

  return (
    <button
      onClick={changeTheme}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition active:scale-95" >

      {theme === "Light" ? <Sun /> : <Moon />}

    </button>
  )
}

export default ThemeToggle