import React from "react"
import AnswerItem from "../AnswerItem/AnswerItem"
import classes from "./AnswerList.module.css"
const AnswerList=({answers})=>{
    const answersList=answers.map((answer)=>{
        return(
            <li key={answer.id}>
               <AnswerItem answer={answer.text}/>
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