import React, { use, useState } from "react";
import './App.css'

function TodoList() {

const [valueWorld, setValueWorld] = useState({
  x: 0,
  y: 0
});
const [valueNether, setValueNether] = useState({
  x: 0,
  y: 0
});

const inputChange = (event) => {
  const { name, value } = event.target;
  setValueWorld((prevValue) => ({
    ...prevValue, // Копируем старые данные
    [name]: value, // Обновляем нужное поле
  }));
};

  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>

      <div>
        <h3>World</h3>
        <input className="input-field" type="text" placeholder="X-coordinates" value={valueWorld.x} name="x" onChange={inputChange}></input>
        <input className="input-field"  type="text" placeholder="Z-coordinates" value={valueWorld.y} name="y" onChange={inputChange}></input>
      </div>

      <button className="button" onClick={() => {
        setValueNether(() => ({
            x: Number(Number(valueWorld.x)/8),
            y: Number(Number(valueWorld.y)/8)
        }));
      }}>Конвертировать</button>
      
      <div>
        <h3>Nether</h3>
        <input className="input-field"  type="text" placeholder="X-coordinates" value={valueNether.x}></input>
        <input className="input-field"  type="text" placeholder="Z-coordinates" value={valueNether.y}></input>
      </div>
    </div>
  );
}

function App() {
  return <TodoList />;
}

export default App;