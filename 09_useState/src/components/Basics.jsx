import { useState } from "react";

const Basics = () => {
    var a = 20;

    const [b, setb] = useState(22);

    const [c, setc] = useState([{ n1: 10, n2: 20, n3: 30, }]);

    const [d, setd] = useState(0);

    function increment() {
        setd(d + 1);
    };

    function decrement() {
        setd(d - 1);
    };
    return (
        <div>
            {/* Directly trying to change  */}
            <h1>Hello this is useState</h1>

            <h4>The value of a is : {a}</h4>

            <button onClick={() => {
                console.log(a);
                a++;
                console.log(a);
            }}>change</button>

            {/* Appling Change Using useState */}
            <h4>The value of b is : {b}</h4>
            <button onClick={() => {
                setb(b + 10);
                console.log(b);

            }}>Change Value</button>

            {/* Using useState with Array */}
            <h4>the value of Array is : {c[0].n1} {c[0].n2} {c[0].n3}</h4>
            <button onClick={() => {
                // setc(c.n1++);
                // prev is just a parameter name — you can call it anything you want.
                setc(prev => [
                    {
                        n1: prev[0].n1 + 10,
                        n2: prev[0].n2 + 20,
                        n3: prev[0].n3 + 30,
                    }
                ]);
            }}>Change Value</button>

            {/* Increment & Decrement */}
            <div style={{ display: "flex", gap: "10px", margin: "30px", border: "0px solid crimson" }}>
                <h4>the Value of count is = {d}</h4>
                <button onClick={increment}>PLUS</button>
                <button onClick={decrement}>MINUS</button>
            </div>

        </div>

    )
}

export default Basics