import React, { useContext, useState } from 'react'
import { Questions } from '../helpers/Questions'
import { QuizContext } from '../helpers/Context';
import Button from './Button';

const Quiz = () => {
  const {score, setScore, setGameState}=useContext(QuizContext);

  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [option,setOption]=useState("");
  const [btnActive,setBtnActive]=useState(0);

  const handleNextQuestion=()=>{
    setCurrentQuestion(currentQuestion+1);
    Questions[currentQuestion].asnwer==option && setScore(score+1); 
    setBtnActive(0);
  }
  const FinishQuestion=()=>{
    Questions[currentQuestion].asnwer==option && setScore(score+1); 
    setGameState("end");
    console.log(btnActive);
  }

  return (
    <div className="quiz-container">
      <h1>Question:{Questions[currentQuestion].prompt}</h1>
      <div className='options'>
        <button onClick={()=>{setOption(1); (setBtnActive(1)) }} className={btnActive==1 ? "correct": ""}>{Questions[currentQuestion].option1}</button>
        <button onClick={()=>{setOption(2); (setBtnActive(2)) }} className={btnActive==2 ? "correct": ""}>{Questions[currentQuestion].option2}</button>
        <button onClick={()=>{setOption(3); (setBtnActive(3)) }} className={btnActive==3 ? "correct": ""}>{Questions[currentQuestion].option3}</button>
        <button onClick={()=>{setOption(4); (setBtnActive(4)) }}  className={btnActive==4 ? "correct": ""}>{Questions[currentQuestion].option4}</button>
      </div>
    {currentQuestion==Questions.length-1 ? 
      <Button label="Finish Quiz" onClick={FinishQuestion}></Button>:
      <Button label="Next Question" onClick={handleNextQuestion}></Button>
    }
    </div>
  );
}

export default Quiz