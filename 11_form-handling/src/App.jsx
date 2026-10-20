
const App = () => {
    const submitHandler = (e) => {
        // Preventing the default behavior to reload the whole page on submit
        // this is Form Handling...
        e.preventDefault();
        console.log('Form Submited');
        
    }
  return (
    <div>
        <form onSubmit={(e) => {
            submitHandler(e)
        } }>
            <input type="text" placeholder='Enter your name...' />
            <button >Submit</button>
        </form>
    </div>
  )
}

export default App