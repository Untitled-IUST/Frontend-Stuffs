import React, {useState} from "react";

export const Register=() => {
    return (
        <> Register </>
    )
}


export const Login=(props) => {
    const[email,setEmail]= useState('');
    const[password,setPass]= useState('');


    const handleSubmit=(e) =>{
        e.preventDefault();
        console.log(email)
    }

    return(
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="name">name </label>
                <input  type="name" placeholder="yourname" id="name" name="name" />
                <label htmlFor="email">email </label>
                <input  type="email" placeholder="youremai@gmail.com" id="email" name="email" />
                <label htmlFor="password">password </label>
                <input   type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log in</button>
            </form>
            <button className="link-btn"  onClick={()=>props.onFormSwitch('firstpage')}>im costumer.</button>
            

        </div>


    )
}