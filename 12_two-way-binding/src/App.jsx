import { useEffect, useState } from "react";

const App = () => {

    const [title, settitle] = useState('');

    const submitHandler = (e) => {
        // Form handling...
        e.preventDefault();
        console.log('Form Submited by -', title);

        settitle('');

    }
    return (
        <div>
            <form onSubmit={(e) => { submitHandler(e) }}>

                <input type="text" placeholder='Console.target value here..'
                    onChange={(e) => {
                        console.log(e.target.value);
                    }} />

                {/* Two way Binding */}
                <input type="text" placeholder='Enter your name...' value={title}
                    onChange={(e1) => {
                        settitle(e1.target.value);
                    }} />
                <button >Submit</button>

            </form>
        </div>
    )
}

export default App