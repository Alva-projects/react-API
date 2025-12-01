import  "../form.css"
import { useEffect, useState } from "react";

function Form () {

const [username, setUsername] = useState("");
const addUsername = () => {
    localStorage.setItem("usernameKey", username);
    setUsername(" ");
    setList((l) => [...l, username]);
    }

const [password, setPassword] = useState("");
const addPassword = () => {
    localStorage.setItem("passwordKey", password);
    setPassword(" ");
    }

    return(
        <>
            <h2>Welcome!</h2>
            <div className="sign-up">
                <p>Sign Up</p>
                <input className="input" placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br/>
                <button onClick={addUsername} className="btn-sign-up">Sign Up</button>
                <br/>
                <ul>
                    {list.map((item, index) => (
                        <li usernameKey={index}>{item}</li>
                    ))}
                </ul>
                <input className="input" placeholder="Password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <button onClick={addPassword} className="btn-sign-up">Sign Up</button>
                <ul>
                    {list.map((item, index) => (
                        <li passwordKey={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="sign-in">
                <p>Sign In</p>
                <input className="input" placeholder="Username" type="text" />
                <input className="input" placeholder="Password" type="text" />
                <br/>
                <button className="btn-sign-in">Sign In</button>
            </div>
        </>
    )
}

export default Form;
