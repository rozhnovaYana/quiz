import React, { Component } from "react"
import classes from "./Drawer.module.css"
const list=[
    1,2,3
];
let maxId=100;
class Drawer extends Component{
    renderList(){
        return list.map(item=>{
            return (
                <li key={Math.random()*maxId++}>
                    <a href="#open">
                        {item}
                    </a>
                </li>)
        })
    }
    render(){
        let cls=[
            classes.Drawer
        ]
        if(this.props.isOpen){
            cls.push(classes.open)
        }
        return(
            <nav className={cls.join(" ")}>
                <ul>
                    {this.renderList()}
                </ul>
            </nav>
        )
    }
}
export default Drawer;