import React from "react"
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Finish.module.css"
const Finish=({quiz, rezults, onReplay})=>{
    let maxKey=100;
    const rezultsLength=quiz.length;
    const succes=Object.keys(rezults).reduce((total, key)=>{
        if(rezults[key]==="check"){
            total++
        }
        return total;
    }, 0);
    const quizList=quiz.map((item, index)=>{
        const icon=rezults[index]==="check"?faCheck:faTimes,
        cls=rezults[index]==="check"?"check":"error";
        return(
            <li key={Math.random()*maxKey++}>
                <strong>{index+1}. </strong>
                {item.question}
                <FontAwesomeIcon icon={icon} className={classes[cls]} />
            </li>
        )
    })
    return(
        <div className={classes.Finish}>
            <ul>
                {quizList}
            </ul>
            <div>Твой результат <strong>{succes}/{rezultsLength}</strong></div>
            <button onClick={onReplay}>Повторить</button>
        </div>
    )
}
export default Finish;