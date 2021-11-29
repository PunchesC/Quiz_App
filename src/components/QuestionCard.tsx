import React from 'react';

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions:number;
}
function QuestionCard({question,answers,callback,userAnswer,questionNr,totalQuestions}: Props){
  

  
 // try switch span with p 
  return (
    <div className="QuestionCard">
      <p className="number">
        Question: {questionNr} / {totalQuestions};
      </p>
      <p dangerouslySetInnerHTML={{__html: question}} />
      <div>
        {answers.map(answer => (
          <div>
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{__html:answer}}/>
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
}
export default QuestionCard;