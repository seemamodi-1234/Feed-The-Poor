import { useRef, useContext } from "react"
import "./login.css"
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
    const username = useRef();
    const password = useRef();
    const userType = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault()
        loginCall(
            { username: username.current.value, password: password.current.value, userType: userType.current.value },
            dispatch
        );
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
                        <input placeholder="Username" required className="loginInput" ref={username} />
                        <input
                            placeholder="Password"
                            required
                            minLength={6}
                            type="password"
                            className="loginInput"
                            ref={password}
                        />
                        <select className="loginSelect" ref={userType} required>
                            <option >Select User Type</option>
                            <option >User</option>
                            <option >Resturant</option>
                        </select>
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            {isFetching ? (
                                <CircularProgress color="primary" size="20px" />
                            ) : (
                                "Log In"
                            )}
                        </button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            {isFetching ? (
                                <CircularProgress color="primary" size="20px" />
                            ) : (
                                "Create a New Account"
                            )}
                        </button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}
