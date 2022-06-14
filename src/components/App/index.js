import "./App.css";
import QuestionDisplay from "../QuestionDisplay";
import ResultsDisplay from "../ResultsDisplay";
import { questionData } from "../../libs/questionData";
import { useReducer, useState } from "react";

const initialState = { quizResults: [] };

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "ADD_ANSWER": {
      const newAnswer = action.choice;
      return { quizResults: [...state.quizResults, newAnswer]};
    }
    case "RESET_ANSWERS": {
      return { quizResults: []};
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
    console.log(choiceId, "choiceID");
    return dispatch({ type: "ADD_ANSWER", id: choiceId });
  }

  function handleResetButtonClick() {
    console.log(`handleResetButtonClick ran, user reset`);
    return dispatch({ type: "RESET_ANSWERS" });
  }

  function calculateResults() {
    const count = {};

    for (const element of choice) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
    let arr = Object.values(count);
    console.log(arr)
    let max = Math.max(...arr);
    console.log(max);
    setResult(max);
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
