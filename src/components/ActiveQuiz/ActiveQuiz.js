import React from "react"
import AnswerList from "../AnswerList/AnswerList"
import classes from "./ActiveQuiz.module.css"
const ActiveQuiz=(props)=>{
    const {question,activeQuiz,quizLenght, ...prop}=props;
    return(
        <div className={classes.ActiveQuiz}>
            <p>
                <span>
                    <strong>{activeQuiz}. </strong>
                    {question}
                </span>
                <small>{activeQuiz}/{quizLenght}</small>
            </p>
            <AnswerList {...prop}/>
        </div>
    )
}
export default ActiveQuiz;