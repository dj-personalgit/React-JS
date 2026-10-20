import { createContext, useState } from "react"

export const ThemeDataContext = createContext()

const ThemeContext = (porp) => {
  const [theme, setTheme] = useState("Light")
  return (
    <div>
        <ThemeDataContext.Provider value={[theme, setTheme]}>
            {porp.children}
        </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext