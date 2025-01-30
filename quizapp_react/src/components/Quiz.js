import React, { useContext, useRef, useState } from 'react'
import { Questions } from '../helpers/Questions'
import { QuizContext } from '../helpers/Context';
import Button from './Button';

const Quiz = () => {
  const {score, setScore, setGameState}=useContext(QuizContext);
  const [index,setIndex]=useState(0);
  const [lock,setlock]=useState(false);
  let Option1=useRef(null);
  let Option2=useRef(null);
  let Option3=useRef(null);
  let Option4=useRef(null);
  let query_options=[Option1,Option2,Option3,Option4];

  const checkAnswer=(e,option)=>{
    if(lock==false){
      if( Questions[index].asnwer==option){
        e.target.classList.add("correct"); 
        setlock(true);
        setScore(score+1);
      }
      else {
        e.target.classList.add("wrong"); 
        setlock(true);
        query_options[Questions[index].asnwer-1].current.classList.add("correct");
      } 
    }
  }
  const handleNextQuestion=()=>{
    if(lock){
      setIndex(index+1);
      setlock(false);
      query_options.map((item)=>{
        item.current.classList.remove("correct","wrong");
        return null;
      });
    }
  }
  const FinishQuestion=()=>{
    lock==true && setGameState("end");
  }

  return (
    <div className="quiz-container">
      <h1>{index+1} :{Questions[index].prompt}</h1>
      <div className='options'>
        <button ref={Option1} onClick={(e)=>{checkAnswer(e,1)}}> {Questions[index].option1}</button>
        <button ref={Option2} onClick={(e)=>{checkAnswer(e,2)}}>{Questions[index].option2}</button>
        <button ref={Option3} onClick={(e)=>{checkAnswer(e,3)}}>{Questions[index].option3}</button>
        <button ref={Option4} onClick={(e)=>{checkAnswer(e,4)}}>{Questions[index].option4}</button>
      </div>
      {index==Questions.length-1 ? 
        <Button label="Finish Quiz" onClick={FinishQuestion}></Button>:
        <Button label="Next Question" onClick={handleNextQuestion}></Button>
      }
    </div>
  );
}

export default Quiz