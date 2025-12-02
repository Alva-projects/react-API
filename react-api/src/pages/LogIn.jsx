import  "../form.css";
import SignUp from "./SignUp";

function LogIn () {
const username = SignUp.username
const password = SignUp.password
    return(
        <>

            <h2>Welcome!</h2>
            <div className="sign-in">
                <p>Log In</p>
                <input className="input" placeholder="Username" type="text" />
                <input className="input" placeholder="Password" type="text" />
                <br/>
                <button className="btn-sign-in">Sign In</button>
            </div>
    </>
    
    )
}
console.log()
export default LogIn;
