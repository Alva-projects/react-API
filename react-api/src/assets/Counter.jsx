






import React from "react";
import { useEffect, useState } from "react";
import "./counter.css"

function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red");
    const colors = ["red", "orange", "yellow", "blue", "indigo", "violet"]
    const changeColor = () => {
        setColor((current) => {
            const indexColor = colors.indexOf(current);
            const nextColor = (indexColor +1) % colors.length;
            return colors[nextColor];
        });
    }
    useEffect(() => {
        document.title = `Count: ${count}, ${color}`
    }, [count, color]);

    return(
        <div className="container-counter">
            <div className="funny-meter">
                <p className="counter" style={{backgroundColor: color}}>
                    Funny-meter: {count}</p>
                    <p>How funny was the joke?  
                        Rate the jokes! How many jokes are needed to reach 100 on the Funny-meter?</p>
            </div>
            <div className="buttons">
                <div className="add">
                    <button className="btn btn-add" onClick={() => setCount((c) => c + 1)}>Add 1</button>
                    <button className="btn btn-sub" onClick={() => setCount((c) => c + 5)}>Add 5</button>
                </div>
                <div className="sub">
                    <button className="btn btn-sub" onClick={() => setCount((c) => c + - 1)}>Subtract 1</button>
                    <button className="btn btn-sub" onClick={() => setCount((c) => c + - 5)}>Subtract 5</button>
                </div>
            </div>
                <button className="btn btn-reset" onClick={() => setCount((c) => 0)}>Reset counter</button>
            <button className="btn btn-color" onClick= {changeColor}>Change color</button>
        </div>
    );
};

export default Counter;