import React, {Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz";
import Finish from "../../components/Finish";
import classes from "./Quiz.module.css"


class Quiz extends Component{
    state={
        activeQuiz:0,
        isFinished:true,
        status:null,
        quiz:[
            {
                question:"Кто является автором 'Мастер и Маргарита'",
                succes:1,
                answers:[
                    {
                        text:"Булгаков", id:1
                    },
                    {
                        text:"Гоголь", id:2
                    },
                    {
                        text:"Достоевский", id:3
                    }
                ]
                
            },{
                question:"Кто является автором 'Время жить и время умирать'",
                succes:3,
                answers:[
                    {
                        text:"Дюма", id:1
                    },
                    {
                        text:"Диккенс", id:2
                    },
                    {
                        text:"Ремарк", id:3
                    }
                ]
            },{
                question:"Кто является автором 'Американской трагедии'",
                succes: 3,
                answers:[
                    {
                        text:"Лондон", id:1
                    },
                    {
                        text:"Стейнбек", id:2
                    },
                    {
                        text:"Драйзер", id:3
                    }
                ]
            }
        ]
    }
    onActiveQuizHandler=(answerId)=>{
        const {activeQuiz, quiz, status}=this.state;
        const succesId=quiz[activeQuiz].succes;
        if(status){
            const key=Object.keys(status)[0];
            if(status[key]==="succes"){
                return
            }
        }
        if(answerId===succesId){
            if(activeQuiz+1<quiz.length){
                const timeOut=window.setTimeout(()=>{
                    this.setState(state=>{
                        return{
                            activeQuiz:state.activeQuiz+1,
                            status:null
                        }
                    })
                    window.clearInterval(timeOut)
                }, 1000)
            }else{
                this.setState({
                    isFinished:true
                })
            }
            this.setState({
                status:{
                    [answerId]:"succes"
                }
            })
            
        }else{
            this.setState({
                status:{
                    [answerId]:"error"
                }
            })
        }
    }
    render(){
        const {activeQuiz, quiz, status,isFinished}=this.state;
        return(
            <div className={classes.Quiz}>
                {isFinished? <Finish/>:
                    <ActiveQuiz 
                    question={quiz[activeQuiz].question}
                    answers={quiz[activeQuiz].answers}
                    onActiveQuizHandler={this.onActiveQuizHandler}
                    status={status}
                    activeQuiz={activeQuiz+1}
                    quizLenght={quiz.length}
                />}
            </div>
        )
    }
}
export default Quiz;