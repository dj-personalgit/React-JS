const Practice2 = () => {

    const user = { name: "Alice", age: 25, city: "Paris" };

  return (
    <div>
        <Userinfo data={user} />
    </div>
  )
}


const Userinfo = ({data}) => {

    return (
        <div>
            <h2>Name: {data.name}</h2>
            <p>Aage: {data.age}</p>
            <p>City: {data.city}</p>
        </div>
    )
}

export default Practice2