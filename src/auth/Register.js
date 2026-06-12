import { useState } from "react";
import {
    createUserWithEmailAndPassword
} from "firebase/auth";

import {
    doc,
    setDoc
} from "firebase/firestore";

import { auth, db } from "./fbconfig";
import { Link } from "react-router-dom";

function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = async (e) => {
        e.preventDefault();

        const userCredential =
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

        await setDoc(
            doc(db, "users", userCredential.user.uid),
            {
                username,
                email
            }
        );

        alert("Account Created");
    };

    return (
        <div style={{ height: "100vh", width: "100%", background: "linear-gradient(90deg,rgba(17, 68, 92, 1) 0%, rgba(156, 20, 140, 1) 50%)" }} className="d-flex justify-content-center align-items-center ">

            <form onSubmit={signup} className="w-50 border p-4 shadow card " >
                <h2 className="mb-4 text-center">Register</h2>
                <input className="form-control mb-3"
                    placeholder="Username / full name"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input className="form-control mb-3"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input className="form-control mb-3"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-primary" >Create Account</button> <br />
                <p>If you have an account <Link to="/mcqapp/login">Login</Link></p>
            </form>
        </div>
    );
}

export default Register;