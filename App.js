
import "./App.css";
import Header from "./components/Header.js";
import React, {useState, useEffect} from "react";


function App() {
  const [state,setState] = useState(2);
  const [data,setData] = useState([]);

  useEffect (() => {
  async function getData(){
    const get = await fetch (`https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001`)

    const res = await get.json();
    setData(res);
    console.log(res);
  }

  getData();

  document.title = `(${state}) Employee online`;


},[state])


  return (
    <div className="App">
      <Header/>
      <button onClick={()=> setState(state+2)}>Click ME {state} </button>
    {
    data.map((element,index)=>{
      return(
        <div key={index}>
          <h4>{element.firstName} </h4>
          <h4>{element.lastName}</h4>
          <h4>{element.email}</h4>
        </div>
      )
    })
      
    }
    </div>
  )
}

export default App;
