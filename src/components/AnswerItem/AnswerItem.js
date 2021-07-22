import React from "react"
import classes from "./AnswerItem.module.css"
const AnswerItem=(props)=>{
    return(
        <div className={classes.AnswerItem}>
            {props.answer}
        </div>
    )
}
export default AnswerItem;