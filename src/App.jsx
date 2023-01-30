import Start from './components/Startpage/Start';
import {useState} from "react";
import Quiz from "./components/Quiz/Quiz.jsx";

function App() {

    const [userName, setUserName] = useState(null)

    return (
        <>
            {
                !userName ? (<Start setUser={setUserName}/>) : (<Quiz/>)
            }
        </>
    )
}

export default App
