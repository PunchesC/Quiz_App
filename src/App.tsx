import  React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import QuestionCard from './components/QuestionCard'

function App() {
  

  const startTrivia = async () => {

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  } 

  const nextQuestion = () => {

  }
  return (
    <div className="App">
      <h1>Quiz</h1>
      <button className="start" onClick={startTrivia}></button>
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
      <QuestionCard />
      <button className = "next" onClick={nextQuestion}></button>
    </div>
  );
}

export default App;
