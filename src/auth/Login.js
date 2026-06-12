import { useState } from "react";
import {
    signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "./fbconfig";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        

        navigate("/");
        alert("Login Successful");
    };

    return (

            <div style={{ height: "100vh",width:"100%", background: "linear-gradient(90deg,rgba(17, 68, 92, 1) 0%, rgba(156, 20, 140, 1) 50%)" }} className="d-flex justify-content-center align-items-center ">

                <form onSubmit={login} className="w-50 border mt-5 p-4 shadow card ">
                    <h2 className="mb-4 text-center">Login</h2>

                    <div class=" mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>


                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            id="exampleInputPassword1" />
                    </div>

                    <button className="btn btn-primary">Login</button> <br />
                    <p>if you have no account <Link to="/register">Register</Link></p>
                </form>
            </div>
    );
}

export default Login;