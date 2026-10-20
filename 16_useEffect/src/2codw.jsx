import { useEffect, useState } from "react";

const Codw2 = () => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log('useEffect is running...');

    }, []) // dependency array which triggers runs only once

    return (
        <div>
            <h2>Hello in useEffect 2</h2>

            <h1>{num}</h1>
            <button onClick={() => {
                setNum(num + 10)
            }}>num button</button>
        </div>
    )
}

export default Codw2