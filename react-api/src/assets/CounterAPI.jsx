






import React from "react";
import { useEffect, useState } from "react";

function UseEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count]);

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>Add</button>
        </div>
    );
};

export default UseEffect;