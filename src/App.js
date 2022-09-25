import { useState, useEffect } from "react";
import React from "react";
import Component from "./Component";

const App = () =>{

  const [newData, setData]=useState([]);

    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then(
        response => {
        return response.json();
        }
    ).then(
        data => {
        console.log(data);
        // console.log(data.data[1].id);
        setData(data);
        // console.log("hi");
        }
    );
    },[]);

    return(
        <div>
            {/* <img src={newData} alt="" style={{width:"300px"}}></img> */}
            <Component items = {newData}/>
        </div>
    );

}

export default App;