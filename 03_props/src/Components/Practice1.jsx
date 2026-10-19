const Practice1 = () => {
    return (
        <div className='parent'>
            <Card user='OM' age={18} />
            <Card user='DJ' age={21} />
        </div>
    )
}

const Card = (props) => {

    console.log(props.user, props.age);

    return (
        <div className='card'>
            <img src="https://plus.unsplash.com/premium_photo-1752881116951-604dca8c8fcc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=725" alt="" />
            <h1>{props.user}, {props.age}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button>View Profile</button>
        </div>
    )
}


export default Practice1