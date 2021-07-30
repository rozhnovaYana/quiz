import React from "react"
import classes from "./Wrapper.module.css"
const Wrapper=({onClick})=>{
    return(
        <div className={classes.Wrapper} onClick={onClick}/>
    )
}
export default Wrapper;