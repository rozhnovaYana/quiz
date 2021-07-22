import React, {Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz";
import classes from "./Quiz.module.css"

class Quiz extends Component{
    state={
        quiz:[
            {
                answers:[
                    {
                        text:"Yes", id:1
                    },
                    {
                        text:"Yes", id:2
                    },
                    {
                        text:"Yes", id:3
                    }
                ]
                
            }
        ]
    }
    render(){
        return(
            <div className={classes.Quiz}>
                <ActiveQuiz answers={this.state.quiz[0].answers}/>
            </div>
        )
    }
}
export default Quiz;