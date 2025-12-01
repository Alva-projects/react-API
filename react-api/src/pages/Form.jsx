
function Form () {
    return(
        <>
        <h2>Welcome!</h2>
        <div className="sign-up">
            <p>Sign Up</p>
            <input className="input" placeholder="Username" type="text" />
            <input className="input" placeholder="Password" type="text" />
        </div>
        <div className="sign-in">
            <p>Sign In</p>
            <input className="input" placeholder="Username" type="text" />
            <input className="input" placeholder="Password" type="text" />
        </div>
    </>
    )
}

export default Form;