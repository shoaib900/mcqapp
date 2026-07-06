import {
    collection,
    getDocs,
    addDoc,
    setDoc,
} from "firebase/firestore";

import { db } from "../auth/fbconfig";

import { useEffect, useState } from "react";
import Timer from "../components/Timer";
import { useNavigate } from "react-router-dom";

function Quiz2() {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [name, setName] = useState("");

    const navigate = useNavigate();



    useEffect(() => {
        getQuestions();
    }, []);

    const getQuestions = async () => {
        const snapshot =
            await getDocs(collection(db, "mcqs2"));

        setQuestions(
            snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
        );
    };

    const submitQuiz = async (e) => {

        let score = 0;

        questions.forEach((q) => {
            if (answers[q.id] === q.answer)
                score++;
        });

        localStorage.setItem("name", name);
        localStorage.setItem("score", score);
        localStorage.setItem(
            "total",
            questions.length
        );

        await addDoc(collection(db, "results2"), {
            name,
            score,
            total: questions.length,
            date: new Date().toLocaleString()
        });
        // localStorage.setItem("name", name);

        // window.location.href = "/result";
        navigate("/mcqapp/result");
    };

    return (
        <div style={{ minHeight: "100vh", paddingTop: "10px", width: "100%", background: "linear-gradient(90deg,rgba(17, 68, 92, 1) 0%, rgba(156, 20, 140, 1) 50%)" }}>
            <Timer submitQuiz={submitQuiz} />
            <div className="container">
                <input className="form-control mb-3 mt-5"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                {questions.map((q, i) => (
                    <div key={q.id} className="bg-white my-3 p-3 rounded">
                        <h3> {i + 1}. {q.question}</h3>

                        {q.options.map((op) => (
                            <label key={op} style={{ marginRight: "80px" }}>
                                <input
                                    required
                                    type="radio"
                                    name={q.id}
                                    value={op}
                                    onChange={() =>
                                        setAnswers({
                                            ...answers,
                                            [q.id]: op
                                        })
                                    }
                                /> &nbsp;
                                {op}
                            </label>
                        ))}
                    </div>
                ))}

                {name == "" || null ? <button disabled className="btn btn-secondary mb-5">
                    Submit
                </button> :
                    <button onClick={submitQuiz} className="btn btn-primary mb-5">
                        Submit
                    </button>
                }
            </div>
        </div>
    );
}

export default Quiz2;