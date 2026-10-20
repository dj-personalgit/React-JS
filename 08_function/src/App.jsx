const App = () => {
    function btn() {
        console.log('button is clicked');
    }

    function btn2() {
        console.log('function is run on click');

    }

    function inputChanging(value) {
        console.log('Typing...', value);

    }

    // value is just a name as prop, you can it as vj no change in output
    return (
        <div className="box">
            <h1>Hello DJ</h1>

            <button onClick={btn()}>Already Runned Once</button>

            <button onClick={btn2}>Change User</button>

            <input type="text" placeholder="Type..."
                onChange={(prop) => {
                    inputChanging(prop.target.value)
                }} />

        </div>
    )
}

export default App