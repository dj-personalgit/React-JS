import axios from "axios";

const Api1 = () => {

  async function getdata() {
    console.log('Data aa gya');

    // Fetch
    const responce = await fetch('https://jsonplaceholder.typicode.com/todos')
    console.log(responce);
    console.log(typeof(responce));
  }

  const getdata2 = async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/todos');

    const data = await responce.json()
    console.log(data);
    console.log(typeof(data));
  }

  // Axios
  const getaxiosData = async () => {
    const responce = await axios.get('https://jsonplaceholder.typicode.com/users')

    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')  // Destructinng

    // console.log('Axios', responce.data);
    console.log(data);
    
  }

  return (
    <div>
      <h4>Hello in API Calling</h4>

      <h1>Fetch</h1>
      <h2> 
        <button onClick={getdata}>
          Click ME
        </button>
      </h2>

      <h2>
        <button onClick={getdata2}>
          Click here
        </button>
      </h2>

      <h1>Axiox</h1>
      <h2>
        <button onClick={getaxiosData}>
          Click Me
        </button>
      </h2>
    </div>
  )
}

export default Api1