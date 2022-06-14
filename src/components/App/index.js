import "./App.css";
import QuestionDisplay from "../QuestionDisplay";
import ResultsDisplay from "../ResultsDisplay";
import { questionData } from "../../libs/questionData";
import { useReducer, useState } from "react";


const initialState =  { quizResults: [] };

function reducer(state, action){
  switch (action.type){
    case 'ADD_ANSWER': {
      return [...state, action.id];
    }
    case 'RESET_ANSWER': {
      return [];
    }
    default: 
    return state;
  } 
}

function App() {
  const [result, setResult] = useState("...pending");
  const [choice, dispatch] = useReducer(reducer, initialState);

  function handleAnswerClick(choiceId) {
    console.log(`handleAnswerClick ran, user clicked choice "${choiceId}"`);
    // TODO: Write your code for step 5 here!
  }

  function handleResetButtonClick() {
    // TODO: Write your code for step 6 here!
  }

  function calculateResults() {
    // TODO: Write your code for step 7 here!
  }

  return (
    <main className="app">
      <h1>Personality Quiz</h1>
      <ol>
        {questionData.map((question) => (
          <QuestionDisplay
            key={question.questionId}
            question={question.questionText}
            choices={question.choices}
            handleAnswerClick={handleAnswerClick}
          />
        ))}
      </ol>
      <button onClick={calculateResults}>Calculate results!</button>
      <ResultsDisplay result={result} />
      <button onClick={handleResetButtonClick}>Reset results!</button>
    </main>
  );
}

export default App;
