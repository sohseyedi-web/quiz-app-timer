import {quizItems} from "../../../data/Data.js";
import {useEffect, useState} from "react";
import '../Quiz.scss'
import {delay} from "../../../helpers/Duration.js";

const QuizItems = ({question, setQuestion, setTime}) => {

    const [quiz, setQuiz] = useState(null);
    const [result, setResult] = useState(null)
    const [className, setClassName] = useState("quiz-box__body-items__result-text")

    useEffect(() => {
        setQuiz(quizItems[question - 1])
    }, [quizItems, question])

    const nextQuiz = (res) => {
        setResult(res);
        setClassName("quiz-box__body-items__result-text active-text");
        delay(3000, () => {
            setClassName(res.correct ? "quiz-box__body-items__result-text correct-text" : "quiz-box__body-items__result-text error-text")
        })

        delay(5000, () => {
            if (res.correct) {
                delay(1000, () => {
                    setQuestion((prev) => prev + 1);
                    setResult(null);
                })
            } else {
                delay(1000, () => setTime(true))
            }
        })
    }

    return (
        <section className="quiz-box__body-items">
            <div className="quiz-box__body-items__title">
                {quiz?.title}
            </div>
            <div className="quiz-box__body-items__result">
                {quiz?.answers.map((i, index) => (
                    <div key={index} className={result === i ? className : "quiz-box__body-items__result-text"}
                         onClick={() => !result && nextQuiz(i)}>{i.text}</div>
                ))}
            </div>

        </section>
    );
};

export default QuizItems;
