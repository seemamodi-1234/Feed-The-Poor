import "./register.css"
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { useRef, useContext } from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom"

export default function Register() {
    const email = useRef();
    const username = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const userType = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault()
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        }
        else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            if (userType.current.value === "Resturant") {
                try {
                    await axios.post("/resturant/createResturant", user);
                    navigate('/login');
                } catch (err) {
                    console.log(err);
                }
            }
            else if(userType.current.value === "User"){
                try {
                    await axios.post("/user/createUser", user);
                    navigate('/login');
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Project</h3>
                    <span className="loginDesc">Connect and Share with people around you with ...</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" required ref={email} type="email" className="loginInput" />
                        <input placeholder="Password" required ref={password}
                            type="password" minLength={6} className="loginInput"
                        />
                        <input placeholder="Password Again" required ref={passwordAgain}
                            type="password" minLength={6} className="loginInput"
                        />
                        <select className="loginSelect" required ref={userType} >
                            <option >Select User Type</option>
                            <option >Normal User</option>
                            <option >Resturant</option>
                        </select>
                        <button className="loginButton" type="submit">Sign Up</button>
                        <Link to="/login">
                            <button className="loginRegisterButton">Log into Account</button>
                        </Link>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
