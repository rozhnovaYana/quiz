import React from "react"
import AnswerItem from "../AnswerItem/AnswerItem"
import classes from "./AnswerList.module.css"
const AnswerList=({answers, onActiveQuizHandler, status})=>{
    const answersList=answers.map((answer)=>{
        return(
            <li key={answer.id}>
               <AnswerItem 
                    answer={answer}
                    onActiveQuizHandler={onActiveQuizHandler}
                    status={status?status[answer.id]:null}
               />
            </li>
        )
    })
    return (
        <ul className={classes.AnswerList}>
            {answersList}
        </ul>
    )
}
export default AnswerList;