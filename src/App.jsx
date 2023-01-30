import Start from './components/Startpage/Start';
import Quiz from "./components/Quiz/Quiz.jsx";
import {useQuiz} from "./helpers/Quizcontext.jsx";

function App() {

    const {userName} = useQuiz()

    return (
        <>
            {
                !userName ? (<Start/>) : (<Quiz/>)
            }
        </>
    )
}

export default App
