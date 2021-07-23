import React from "react"
import classes from "./AnswerItem.module.css"
const AnswerItem=(props)=>{
    const cls=[classes.AnswerItem],
    {status, answer,onActiveQuizHandler}=props;
    if(status){
        cls.push(classes[status])
    }
    return(
        <div 
            className={cls.join(" ")}
            onClick={()=>onActiveQuizHandler(answer.id)}
        >
            {answer.text}
        </div>
    )
}
export default AnswerItem;