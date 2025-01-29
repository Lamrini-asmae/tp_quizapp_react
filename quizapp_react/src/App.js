import react, { useState } from 'react';
import './App.css';
import StartScrean from './components/StartScrean';
import EndScrean from './components/EndScrean';
import Quiz from './components/Quiz';
import { QuizContext } from './helpers/Context';
function App() {
  const [gameState,setGameState]=useState("start");
  const [score,setScore]=useState(0);

  return (
    <div className="App">
        <h1>Quiz Game</h1>
        <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
          {gameState=="start" && <StartScrean />}
          {gameState=="quiz" && <Quiz />}
          {gameState=="end" && <EndScrean />}
        </QuizContext.Provider>
    </div>
  );
}

export default App;
