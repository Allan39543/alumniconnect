import React from "react";
import { FcGoogle } from 'react-icons/fc'

function SignIn(){

    const googleAuth = () => {
        window.location.href = `${process.env.REACT_APP_API_URL}/auth/google/callback`;
    }

    return(

        <div className="sign-in">

            {/* <h1>Sign In</h1>

            <form>
                <label> Username/Email</label>

                <input type="email" required/>

                <label> Password </label>
                
                <input type="password" required/>

                <button type="submit">
                    Sign In
                </button>

            </form> */}

<div className='sign-in-page'>

            {/* */}
            <button onClick={googleAuth}  ><FcGoogle size='1.5em' className='google-icon'/> <h4>Continue With Google</h4> </button>


           
        </div>

        </div>
    )
}

export default SignIn