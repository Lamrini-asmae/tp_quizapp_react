import React, { useContext } from 'react'
import { QuizContext } from '../helpers/Context'
import "../App.css";
import Button from './Button';

const StartScrean = () => {
    const {gameState, setGameState}=useContext(QuizContext);
  return (
    <div className='start-container'>
       <Button label="Start Quiz" onClick={()=>{setGameState("quiz")}}></Button>
    </div>
  )
}
export default StartScrean