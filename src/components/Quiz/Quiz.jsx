import './Quiz.scss'
import {moneyList} from "../../data/Data.js";
import {useEffect, useState} from "react";
import Timer from "./timer/Timer.jsx";
import QuizItems from "./quizItems/QuizItems.jsx";

const Quiz = () => {

    const [time, setTime] = useState(false);
    const [question, setQuestion] = useState(1);
    const [cash, setCash] = useState("0")

    useEffect(() => {
        question > 1 && setCash(moneyList.find((m) => m.id === question - 1).amount)
    }, [question, moneyList])

    return (
        <section className="quiz">
            <div className="quiz-box">
                <div className="quiz-box__head">
                    <div className="quiz-box__head-timing">
                        <Timer setTimeout={setTime} question={question}/>
                    </div>
                </div>
                <div className="quiz-box__body">
                    <QuizItems question={question} setQuestion={setQuestion} setTime={setTime}/>
                </div>
            </div>
            <div className="quiz-money">
                <ul className={"quiz-money__list"}>
                    {
                        moneyList.map((money) => (
                            <li className={"quiz-money__list-item"} key={money.id}>
                                <span className={"quiz-money__list-item__number"}>{money.id}</span>
                                <span className={"quiz-money__list-item__amount"}>{money.amount}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </section>
    )
}

export default Quiz