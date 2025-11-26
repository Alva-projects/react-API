import React, { useEffect, useState } from "react";
import "./joke.css"

function Joke () {
    const [joke, setJoke] = useState([]);
    const fetchData = async() => {;
        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            const data = await response.json();
            setJoke(data);
        }
        catch (error){
            console.log("Error fetching data:", error);
        };
    };
    useEffect(() => {fetchData();}, [])
  return(
    <div className="div-joke">
        <h1 className="title-joke">Joke generator</h1>
        <div className="container-joke">
            <p>
                {joke.setup}
            </p>
            <p> {joke.punchline}</p>
        </div>
        <button className="btn btn-joke" onClick={fetchData}>New joke</button>
    </div>

  );  
};

export default Joke;