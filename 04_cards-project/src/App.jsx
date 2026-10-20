import Card from "./components/Cards/Card";
import CardDemo from "./components/Extra/CardDemo";
import User from "./components/Extra/User";


const App = () => {
  const arr = [10, 20, 30, 40];

  return (
    <div>
      <div className="parent">
        <Card />


        {arr.map(function (index) {
          return <CardDemo key={index} />
        })}

        {arr.map(function (DJ, index) {
          return <div className="card" key={index}>
            <User name={DJ} />
          </div>
        })}

      </div>
    </div>
  )
}

export default App