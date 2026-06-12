import {
    collection,
    getDocs,
    addDoc,
} from "firebase/firestore";

import { db } from "../auth/fbconfig";

import { useEffect, useState } from "react";
import Timer from "../components/Timer";

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [name, setName] = useState("");



    useEffect(() => {
        getQuestions();
    }, []);

    const getQuestions = async () => {
        const snapshot =
            await getDocs(collection(db, "mcqs"));

        setQuestions(
            snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
        );
    };

    const submitQuiz = (e) => {

        let score = 0;

        questions.forEach((q) => {
            if (answers[q.id] === q.answer)
                score++;
        });


        localStorage.setItem("score", score);
        localStorage.setItem(
            "total",
            questions.length
        );
        // localStorage.setItem("name", name);

        window.location.href = "/result";
    };

    return (
        <div style={{ height: "100vh", paddingTop: "10px", width: "100%", background: "linear-gradient(90deg,rgba(17, 68, 92, 1) 0%, rgba(156, 20, 140, 1) 50%)" }}>
            <div className="container">

                <Timer submitQuiz={submitQuiz} />

                <input className="form-control mb-3 mt-5"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                {questions.map((q) => (
                    <div key={q.id} className="bg-white my-3 p-3 rounded">
                        <h3>{q.question}</h3>

                        {q.options.map((op) => (
                            <label key={op} style={{ marginRight: "60px" }}>
                                <input
                                    type="radio"
                                    name={q.id}
                                    value={op}
                                    onChange={() =>
                                        setAnswers({
                                            ...answers,
                                            [q.id]: op
                                        })
                                    }
                                />
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

export default Quiz;