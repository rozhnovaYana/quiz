import React from "react"
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./NavigationIcon.module.css"
const NavigationIcon=(props)=>{
    const icon=props.isActive?faTimes:faBars;
    const cls=[
        classes.NavigationIcon
    ]
    if(props.isActive){
        cls.push(classes.active)
    }
    return(
        <div className={cls.join(" ")}>
            <FontAwesomeIcon icon={icon}  onClick={props.onMenuClick} />
        </div>    
    )
}
export default NavigationIcon;