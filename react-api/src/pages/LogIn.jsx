import  "../form.css"

function Form () {
    return(
        <>
            <h2>Welcome!</h2>
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
