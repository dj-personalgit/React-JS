function LocalStorageExample() {
  const handleSetItem = () => {
    localStorage.setItem("name", "John Doe");
    alert("Item saved!");
  };

  const handleGetItem = () => {
    const name = localStorage.getItem("name");
    alert(name ? `Stored name: ${name}` : "No name found!");
  };

  const handleRemoveItem = () => {
    localStorage.removeItem("name");
    alert("Item removed!");
  };

  const handleClear = () => {
    localStorage.clear();
    alert("All items cleared!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Local Storage Example</h2>
      <button onClick={handleSetItem}>Set Item</button>
      <button onClick={handleGetItem}>Get Item</button>
      <button onClick={handleRemoveItem}>Remove Item</button>
      <button onClick={handleClear}>Clear All</button>
    </div>
  );
}

export default LocalStorageExample;
