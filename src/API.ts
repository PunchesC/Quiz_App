import QuestionCard from "./components/QuestionCard";
import { shuffleArray } from "./util";

export type Question = {
  catergory: string,
  correct_answer: string;
  difficulty: string;
  incorrect_answers : string[];
  question: string;
  type: string;
}

export type QuestionState = Question & {answers: string[]}

export enum Difficulty{
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}

export const fetchQuizQuestions = async (amount: number, difficulty:Difficulty) =>{
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
  // double await first await the fetch then when to convert to json
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question)=>({
    ...question,
    amswer: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }))
  console.log(data);
}