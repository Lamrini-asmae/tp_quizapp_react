import React, { useContext } from 'react'
import { QuizContext } from '../helpers/Context'
import { Questions } from '../helpers/Questions'
import Button from './Button';

const EndScrean = () => {
    const {score,setScore, setGameState}=useContext(QuizContext);
    const restartQuiz=()=>{
      setScore(0);
      setGameState("start");
    }
  return (
    <div className='end-container'>
      <h1>Quiz Finished</h1>
      <h3>{score} / {Questions.length}</h3>
      <Button label="Restart Quiz" onClick={restartQuiz}></Button>
    </div>
  )
}

export default EndScrean