import { useEffect, useState } from "react";
import  "../form.css"

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const addUser = () => {
    localStorage.setItem("usernameKey", username);
    localStorage.setItem("passwordKey", password);

    setUsername("");
    setPassword("");
    alert("User has been saved")


    }; 

    return(
        <>
            <h2>Sign Up here</h2>
            <div className="sign-up">

                <input 
                className="input" 
                placeholder="Username" 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                />
                <br/>

                <input 
                className="input" 
                placeholder="Password" 
                type="text" 
                value={password} 
                onChange={(p) => setPassword(p.target.value)} 
                />

                <br/>
                <button onClick={addUser} className="btn-sign-up">Sign Up</button>
            </div>
        </>
    )
}

export default SignUp;