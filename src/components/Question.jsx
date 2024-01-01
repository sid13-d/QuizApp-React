import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTIONS from "../questions";
import { useState, useCallback } from "react";

export default function Question({index,onSelect,onSkipAnswer }) {
    const [answer, setAnswer] = useState({
        selectedAnswer:'',
        isCorrect: null
    });
        let timer = 10000;

        if(answer.selectedAnswer) {
            timer = 1000;
        }
        if(answer.isCorrect !== null) {
            timer = 2000;
        }

        let answerState = '';

        if(answer.selectedAnswer && answer.isCorrect !== null) {
            answerState = answer.isCorrect ? 'correct' : 'wrong';
        }
        else if(answer.selectedAnswer && answer.isCorrect === null) {
            answerState = 'answered';
        }
        
    function handleSelectAnswer(ans) {
        setAnswer({
            selectedAnswer: ans,
           isCorrect: null
        })

        console.log("SelectedAnswer in the Question.jsx \n ::",ans)

        setTimeout(() => {
            setAnswer({
                selectedAnswer: ans,
                isCorrect: ans === QUESTIONS[index].answers[0]
            })

           setTimeout(() => {
                console.log("Answer sending from Question.jsx to Quiz.jsx right now inside Timeout of Question.jsx ::", answer.selectedAnswer);
                onSelect(ans);
           }, 2000);
        }, 1000);
    }
    return(
        <div id="question">
            <QuestionTimer 
                    key={timer}
                    timeout={timer} 
                    onTimeout={answer.selectedAnswer === '' ? onSkipAnswer:null} 
                    mode={answerState}/>
            <h1>{QUESTIONS[index].text}</h1>
            <Answers 
                
                answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer} 
                answerState={answerState}
                onSelectAns={handleSelectAnswer}/>
        </div>
    );
}