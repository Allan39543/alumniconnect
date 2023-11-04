import React from "react";

function SignIn(){

    return(

        <div className="sign-in">

            <h1>Sign In</h1>

            <form>
                <label> Username/Email</label>

                <input type="email" required/>

                <label> Password </label>
                
                <input type="password" required/>

                <button type="submit">
                    Sign In
                </button>

            </form>

        </div>
    )
}

export default SignIn