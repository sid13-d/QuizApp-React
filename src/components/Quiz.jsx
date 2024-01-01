import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import QuizComplete from "../assets/quiz-complete.png";
import Summary from "./Summary";
import Question from "./Question";

export default function Quiz() {
   
    
    const [userAnswers, setUserAnswers] = useState([]);

    const quizIsOver = userAnswers.length === QUESTIONS.length;
    const activeQuestionIdx =userAnswers.length;

   const handleSelectAnswer = useCallback( function handleSelectAnswer(answer) {
        console.log("The answer received in the Quiz.jsx",answer);
        setUserAnswers((prevAnswer) => {
            return [...prevAnswer, answer]
        
        });

      
        console.log(answer , "  ::  ", QUESTIONS[activeQuestionIdx]);
    }, []);

    const handleSkipAnswer = useCallback( function handleSkipAnswer() {
         handleSelectAnswer(null);
         console.log("Answer set through skip");
         console.log("The answers",userAnswers);
        }, [handleSelectAnswer]);

    
    if(quizIsOver) {
        return(
            <Summary userAnswers={userAnswers}/>
        );
    }

   
    
    return (

        <div id="quiz">
            
           <Question 
                key={activeQuestionIdx}
                index={activeQuestionIdx}
                onSelect={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
                />
        </div>
    );
    }
