import { useEffect, useState } from "react";

const Codw3 = () => {
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(10);

    useEffect(() => {
        console.log('useEffect is running...');

    }, [num]) // passing num as dependecy

    return (
        <div>
            <h2>Hello in useEffect 3</h2>

            <h1>{num} {num2}</h1>
            <button 
                onMouseEnter={() => { setNum(num + 10) }}
                onMouseLeave={() => { setNum2(num2 + 20) }}>
                    Leave & Enter
            </button>
        </div>
    )
}

export default Codw3