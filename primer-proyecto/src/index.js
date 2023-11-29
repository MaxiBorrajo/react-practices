import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HelloWorld } from "./components/HelloWorld/HelloWorld.component";
import { Button } from "./components/Button/Button.component";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
useEffect(()=>{
  console.log('Aparezco')
}, [])//Los corchetes son para que se ejecute una vez si esta vacio, 
//si pones poner de que depende para que se ejecute
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <Button
        label="+1"
        action={() => {
          setCounter(counter + 1);
        }}
      />
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h2>{name}</h2>
    </div>
  );
}

root.render(
  <>
    <HelloWorld title="Tierra" />
    <Counter />
  </>
);
