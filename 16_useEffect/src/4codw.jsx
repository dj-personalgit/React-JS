import { useEffect, useState } from "react";

const Codw4 = () => {

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    const achange = () => {
        console.log('A is changed');
    }

    const bchange = () => {
        console.log('B is changed');
    }

    useEffect(() => {
        achange();
        console.log('useEffect is running...');
    },[a])
  return (
    <div>
        <h3>A = {a}</h3>
        <h3>B = {b}</h3>
        <h2>
            <button onClick={() => {
                setA(a+1)
            }}>Change A</button>
        </h2>

        <h2>
            <button onClick={() => {
                setB(b-1)
            }}>Change B</button>
        </h2>
    </div>
  )
}

export default Codw4