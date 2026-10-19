// Passing Functions as Props
const Practice3 = () => {

    const greetUser = (name) => {
        alert(`Hello, ${name}!`);
    };

    return <Button onGreet={greetUser} />;
}

function Button({ onGreet }) {
  return (
    
    <div>
        <h2>Question 3</h2>
        <button onClick={() => onGreet("Alice")}>Click Me</button>
    </div>
  );
}

export default Practice3