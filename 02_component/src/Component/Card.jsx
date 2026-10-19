const Card = () => {
    const user = 'Harsh'
    const age = 18
    return (
        <div className="Cardtop">
            <h1>This is {user}</h1>
            <span>this is {age}+ content</span>
            <div className="card">
                <h1>Dhananjay Sinha</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, doloribus.</p>
            </div>

            <div className="card">
                <h1>Dhananjay Sinha</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, doloribus.</p>
            </div>

            <div className="card">
                <h1>Dhananjay Sinha</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, doloribus.</p>
            </div>
        </div>
    )
}

export default Card