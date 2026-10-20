import { useEffect } from "react";

const Codw1 = () => {

    useEffect(() => {
        console.log('useEffect is running...');
    })

    function random() {
        const a = Math.random()
        console.log(a);

    }
    return (
        <div>
            <h2>Hello in useEffect</h2>
            <button onClick={random}>click</button>
        </div>
    )
}

export default Codw1