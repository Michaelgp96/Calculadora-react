import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // Usamos eval para calcular la expresión
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Calculadora</h1>
      <input type="text" value={input} readOnly style={styles.display} />
      <div style={styles.buttons}>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    border: "2px solid black",
    width: "200px",
    margin: "0 auto",
    marginTop: "50px",
    borderRadius: "10px",
  },
  display: {
    width: "100%",
    height: "40px",
    textAlign: "right",
    fontSize: "24px",
    padding: "5px",
    marginBottom: "10px",
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
    width: "100%",
  },
};

export default App;
