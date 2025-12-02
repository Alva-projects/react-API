import { useEffect, useState } from "react";
import  "../form.css";
import { useNavigate } from "react-router-dom";

function LogIn () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = () => {
        const storedUsername = localStorage.getItem("usernameKey");
        const storedPassword = localStorage.getItem("passwordKey");

    if (username === storedUsername && password === storedPassword) {
        alert(`Welcome ${username}`)
        navigate("/game")
    } else {
        alert ("Username or password is incorrect")
    }
}
    return(
        <>
            <h2>Welcome!</h2>
            <div className="sign-in">
                <p>Log In</p>
                
                <input 
                className="input" 
                placeholder="Username" 
                type="text" 
                onChange={(e) => setUsername(e.target.value)}
                />
                
                <input 
                className="input" 
                placeholder="Password" 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}

                />

                <br/>
                <button onClick={handleLogin} className="btn-sign-in">Log In</button>
            </div>
        </>
    );
}
export default LogIn;
