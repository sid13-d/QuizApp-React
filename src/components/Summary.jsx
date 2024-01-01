
import QUESTIONS from "../questions";
import QuizComplete from '../assets/quiz-complete.png';


export default function Summary({userAnswers}) {
    const skippedAns = userAnswers.filter((ans) => ans===null);
    const correctAns = userAnswers.filter((ans, index) => ans === QUESTIONS[index].answers[0]);
    const wrongAns = userAnswers.filter((ans, index) => ans !== QUESTIONS[index].answers[0] && ans !== null);

    console.log(userAnswers)
    return(


        <div id="summary">
             
                <img src={QuizComplete} alt="Tropy Icon" />
                <h2>Quiz Complete!</h2>
                <div id="summary-stats">
                    <p>
                        <span className="number">
                           {Math.round((skippedAns.length/userAnswers.length)*100)}%
                        </span>
                        <span className="text">Skipped</span>
                    </p>
                    <p>
                        <span className="number">
                            {Math.round((correctAns.length/userAnswers.length)*100)}%
                        </span>
                        <span className="text">Correct Answered</span>
                    </p>
                    <p>
                        <span className="number">
                            {Math.round((wrongAns.length / userAnswers.length)*100)}%
                        </span>
                        <span className="text">Wrong Answered</span>
                    </p>
                </div>

                <ol>

                    { userAnswers.map((answer, index) => {
                            const question = QUESTIONS[index];
                            const isCorrect = answer === question.answers[0];
                            let userAnsCss=null;
                            if(answer === null)
                                userAnsCss = 'skipped';
                            else if(isCorrect)
                                userAnsCss = 'correct';
                            else
                                userAnsCss = 'wrong';
                            return(
                                <li key={index}>
                                    <h3>{index + 1}</h3>
                                    <p className="question">{question.text}</p>
                                    <p className={`user-answer ${userAnsCss}`}>{answer ?? "skipped"}</p>
                                    <p className="answer-state">
                                        ✅
                                        <span className="user-answer">{question.answers[0]}</span>
                                    </p>
                                </li>
                            );
                    
                        })
                    }   
                    
                </ol>
        </div>
    );
}