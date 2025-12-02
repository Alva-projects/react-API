import { useEffect, useState } from "react";
import  "../form.css"


function SignUp() {
    const [username, setUsername] = useState("");
    const [list, setList] = useState([]);
    const addUsername = () => {
    localStorage.setItem("usernameKey", username);
    setUsername("");
    setList((l) => [...l, localStorage.getItem("usernameKey")]);

    

    }
    
    useEffect(() => {
        setList([localStorage.getItem("usernameKey")]);
}, []);
    const [password, setPassword] = useState("");
    const addPassword = () => {
    localStorage.setItem("passwordKey", password);
    setPassword("");
    }

    return(
        <>
            <p>Sign Up</p>
            <div className="sign-up">
                {/*Username sign up*/}
                <input className="input" placeholder="Username" type="text" value={username} onChange={(u) => setUsername(u.target.value)} />
                <br/>
                <button onClick={addUsername} className="btn-sign-up">Sign Up</button>
                <br/>
                <ul>
                    {list.map((item, index) => (
                        <li usernameKey={index}>{item}</li>
                ))}
                </ul>
                
                {/*Password sign up*/}
                <input className="input" placeholder="Password" type="text" value={password} onChange={(p) => setPassword(p.target.value)} />
                <br/>
                <button onClick={addPassword} className="btn-sign-up">Sign Up</button>
                <ul>
                    {list.map((item, index) => (
                        <li passwordKey={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SignUp;