// Using useState in Array with object
import { useState } from "react"

const Num3 = () => {
    const [num3, setnum3] = useState([{ m1: 10, m2: 20, }]);     // This is array
    return (
        <div>
            <h2>Value of NUM = {num3[0].m1} and {num3[0].m2}</h2>
            <button onClick={() => {
                setnum3(prev => [
                    {
                        m1: prev[0].m1 + 10,
                        m2: prev[0].m2 + 20,
                    }
                ]);
            }}>Change Value</button>
        </div>
    )
}

export default Num3