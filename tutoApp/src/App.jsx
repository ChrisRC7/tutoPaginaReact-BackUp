import React from "react";
import axios from "axios";

function App () {
  const myStyle = {
    backgroundColor: "#2f4e1c",
    color: "white",
    padding: "10px",
    margin: "auto",
    width: "300px",
    height: "150px",
    textAlign: "center",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  };

  const myStyle2 = {
    backgroundColor: "ligtgray",
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const username = e.target[1].value;
    console.log(name);
    console.log(username);
    axios.post("http://localhost:5191/user/register/" + name + "/" + username); //quiero registrar en la apieste nombre 
  }

  return (
    <div>
      <form style={myStyle} onSubmit={handleSubmit}>
        <h1>Registra tu usuario</h1>
        <input type="text" placeholder="Nombre" style={myStyle2}></input>
        <input type="text" placeholder="Usuario" style={myStyle2}></input>
        <button>Registrar</button>
      </form>
    </div>
  )
  
}


export default App;