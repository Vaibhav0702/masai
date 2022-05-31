
import "./login.css"

import { useState } from "react"

import GoogleLogin from 'react-google-login';
import { Link } from "react-router-dom";

// import { GoogleLogout } from 'react-google-login';

export const Login = () => {


    const [formData, setFormdata] = useState({

        username: "",
        email: "",
        password: "",

    });

    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormdata({
            ...formData,
            [id]: value,
        });

    };



    const handleSubmit = (e) => {

        e.preventDefault(e);

        // console.log(formData);

        fetch("http://localhost:8080/users", {

            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" }

        });

        alert("Sign Up Successful")

    };



    const responseGoogle =(response) => {
        console.log(response);
    }





    return <>

        <div className="login">
            <div>
                <Link to="/">
                    <div className="Llogo">
                        <img src="https://www.masaischool.com/img/navbar/logo.svg" alt="" />
                    </div>

                </Link>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit} >
                    <div className="title">Sign Up</div>
                    <div> <p className="formp">Full Name</p></div>

                    <div><input onChange={handleChange} className="input" id="username" type="text" placeholder="Enter Your Full Name" required /></div>

                    <div> <p className="formp">Email</p></div>

                    <div><input onChange={handleChange} className="input" id="email" type="text" placeholder="Enter Email" required /></div>

                    <div className="forgot"> <p className="formp">Password</p> <a className="fgta" href="/">Forgot Password ? </a></div>

                    <div><input onChange={handleChange} className="input" id="password" type="text" placeholder="Enter Password" required /></div>

                    <div> <input type="submit" value="Sign Up" id="submit" /></div>
                </form>

                <GoogleLogin
                    className="google"
                    clientId="72289493446-kc6fm1f88fktpnp3i6ga4hvdae5dg07i.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                >Google Signup</GoogleLogin>

                {/* <GoogleLogout
                    clientId="72289493446-kc6fm1f88fktpnp3i6ga4hvdae5dg07i.apps.googleusercontent.com"
                    buttonText="Logout"
                    // onLogoutSuccess={logout}
                >
                </GoogleLogout> */}
            </div>

        </div>


    </>



};