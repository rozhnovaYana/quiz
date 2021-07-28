import React, { Component } from "react"
import NavigationIcon from "../../components/Navigation/NavigationIcon"
import classes from "./Layout.module.css"

class Layout extends Component{
    state={
        isActive:false
    }
    onMenuClick=()=>{
        this.setState(state=>{
            return{
                isActive:!state.isActive
            }
        })
    }

    render(){
        const {isActive}=this.state
        return (
            <div className={classes.Layout}>
                <NavigationIcon isActive={isActive} onMenuClick={this.onMenuClick}/>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
        
    }
}
export default Layout;