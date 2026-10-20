// Using useState in object without an Array
import { useState } from "react"

const Num2 = () => {
  const [num2, setnum2] = useState({ n1: 11, n2: 22, n3: 33, });       // This is direct object

  // this is worng we cannot update value directly to object
  const btn1 = () => {
    setnum2(num2.n1 + 10);

    console.log(num2);

  } 

  // we update value using callback function to select current (previous) value of state
  const btn2 = () => {
    // const newNum = [...num2];
    setnum2(prev => ({
      ...prev,
      n1: prev.n1 + 11,
      n2: prev.n2 + 11,
      n3: prev.n3 + 11,
    }));
  }



  return (
    <div>
      <h2>Value of NUM = {num2.n1} & {num2.n2}</h2>
      <button onClick={btn2}>Click Me</button>
    </div>
  )
}

export default Num2