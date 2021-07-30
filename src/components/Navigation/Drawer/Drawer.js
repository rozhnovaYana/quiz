import React, { Component } from "react"
import Wrapper from "../../UI/Wrapper/Wrapper";
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
            <React.Fragment>
                <nav className={cls.join(" ")}>
                    <ul>
                        {this.renderList()}
                    </ul>
                </nav>
                {this.props.isOpen?<Wrapper onClick={this.props.wrapperOnClick}/>:null}
            </React.Fragment>
        )
    }
}
export default Drawer;