import { useRef, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/ContextProvider";

const SignIn = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    
    // State to trigger navigation after successful login
    const [redirectToUsers, setRedirectToUsers] = useState(false);

    const { setUser, setToken } = useStateContext();

    const Submit = (ev) => {
        ev.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        axiosClient
            .post("/login", payload)
            .then(({ data }) => {
                console.log(data);
                setUser(data.user);
                setToken(data.token);

                // Trigger navigation
                setRedirectToUsers(true);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            });
    };

    // If redirectToUsers is true, navigate to /users
    if (redirectToUsers) {
        return <Navigate to="/users" />;
    }

    return (
        <div className="login-signup-form animated fadeinDown">
            <div className="form">
                <h1 className="title">Sign In To Your Account</h1>
                <form onSubmit={Submit}>
                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                    />
                    <button className="btn btn-block">Sign In</button>
                    <p className="message">
                        Not Registered?{" "}
                        <Link to="/sign-up">Create a new account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
