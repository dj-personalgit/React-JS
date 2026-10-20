import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, setTheme] = useState('Light')
  return (
    <div>
      <h2 className='text-4xl font-bold'>theme is {theme}</h2> <br />
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App