import React from "react"
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Finish.module.css"
const Finish=()=>{
    return(
        <div className={classes.Finish}>
            <ul>
                <li>
                    <strong>1.</strong>
                    What is your name?
                    <FontAwesomeIcon icon={faCheck} className={classes.check} />
                </li>
                <li>
                    <strong>1.</strong>
                    What is your name?
                    <FontAwesomeIcon icon={faTimes} className={classes.error} />
                </li>
            </ul>
            <div>Твой результат 4/4</div>
            <button>Повторить</button>
        </div>
    )
}
export default Finish;