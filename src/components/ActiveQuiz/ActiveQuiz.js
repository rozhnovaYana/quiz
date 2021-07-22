import React from "react"
import AnswerList from "../AnswerList/AnswerList"
import classes from "./ActiveQuiz.module.css"
const ActiveQuiz=({answers})=>{
    return(
        <div className={classes.ActiveQuiz}>
            <p>
                <span>
                    <strong>2.</strong>
                    How do you do?
                </span>
                <small>2/3</small>
            </p>
            <AnswerList answers={answers}/>
        </div>
    )
}
export default ActiveQuiz;