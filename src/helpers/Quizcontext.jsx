import {createContext, useContext, useState} from "react";

export const QuizApp = createContext("");

const QuizProvider = ({children}) => {

    const [userName, setUsername] = useState(null);

    return (
        <QuizApp.Provider
            value={{userName, setUsername}}
        >
            {children}
        </QuizApp.Provider>
    );
};

export default QuizProvider;


export const useQuiz = () => useContext(QuizApp)

