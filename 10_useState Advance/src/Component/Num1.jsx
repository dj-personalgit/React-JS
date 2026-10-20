// Using useState directly

import { useState } from "react"

const Num1 = () => {

    const [num1, setnum1] = useState(10);

    // this is a arrow function
    const btn = () => {
        console.log('button clicked', num1);
        setnum1(num1 + 10);

    }

    return (
        <div>
            <h2>Value of NUM = {num1}</h2>
            <button onClick={btn}>Click Me</button>
        </div>
    )
}

export default Num1