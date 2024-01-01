import { useEffect, useState } from "react";

export default function QuestionTimer({timeout, onTimeout, mode}) {

   const [remainingTime, setRemainingTime] = useState(timeout);

   useEffect(() => {
    console.log('Setting Timeout');
    const timer = setTimeout(onTimeout, timeout);

    return () => {
        console.log('Clearing Timeout');
        clearTimeout(timer);
    }
   }, [timeout,onTimeout]);
    

    useEffect(() => {
        console.log('Setting Interval');    
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 100);
        }, 100);

        return () => {
            console.log('Clearing Interval');
            clearInterval(interval);
        }
    }, []);
    
    return(
        <progress id="question-time" value={remainingTime} max={timeout} className={mode} />
    );
}