import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelectAns}) {
    const shuffledAnswers = useRef();
    if(!shuffledAnswers.current){

        const ans = [...answers];
        shuffledAnswers.current = ans.sort(() => Math.random() - 0.5);
    }
    return(
        <ul id="answers">
                {shuffledAnswers.current.map((answer) => {
                    let cssCalss = '';
                    const isSelected = answer === selectedAnswer; 
                    if (answerState === 'answered' && isSelected) {
                            cssCalss = 'selected';
                    }

                    if (answerState === 'correct' && isSelected) {
                        cssCalss = 'correct';
                    }else if (answerState === 'wrong' && isSelected) {
                        cssCalss = 'wrong';
                    }
                    return(
                        <li key={answer} className="answer">
                            <button onClick={() => {console.log("answer sending from Answer.jsx ::", answer); onSelectAns(answer)}} className={cssCalss} disabled={answerState !== ''}>{answer}</button>
                        </li>
                    );
                })
                }
        </ul>
    );
}