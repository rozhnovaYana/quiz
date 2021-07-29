import React, { Component } from "react"
import Drawer from "../../components/Navigation/Drawer"
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
                <Drawer isOpen={isActive}/>
                <NavigationIcon isActive={isActive} onMenuClick={this.onMenuClick}/>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
        
    }
}
export default Layout;