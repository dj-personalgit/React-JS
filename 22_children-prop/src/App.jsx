import { useState } from "react"
import Navbar from "./sections/Navbar"

const App = () => {
  const [theme, setTheme] = useState('Light')
  return (
    <div>
      <Navbar theme={theme}/>
    </div>
  )
}

export default App