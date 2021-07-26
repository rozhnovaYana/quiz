import React, {Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz";
import Finish from "../../components/Finish";
import classes from "./Quiz.module.css"


class Quiz extends Component{
    state={
        activeQuiz:0,
        rezults:{},
        isFinished:false,
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
                question:"В каком году отменили крепостное право?",
                succes:2,
                answers:[
                    {
                        text:"1816", id:1
                    },
                    {
                        text:"1861", id:2
                    },
                    {
                        text:"1865", id:3
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
    onReplay=()=>{
        this.setState({
            activeQuiz:0,
            rezults:{},
            isFinished:false,
            status:null,
        })
    }
    onActiveQuizHandler=(answerId)=>{
        const {activeQuiz, quiz, status, rezults}=this.state;
        const succesId=quiz[activeQuiz].succes;
        if(status){
            const key=Object.keys(status)[0];
            if(status[key]==="succes"){
                return
            }
        }
        if(answerId===succesId){
            if(!rezults[activeQuiz]){
                this.setState({
                    rezults:{
                        ...rezults, [activeQuiz]:"check"
                    }
                    
                })
            }
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
                },
                rezults:{
                    ...rezults, [activeQuiz]:"error"
                }
                
            })
        }
    }
    render(){
        const {activeQuiz, quiz, status,isFinished,rezults}=this.state;
        return(
            <div className={classes.Quiz}>
                {isFinished? <Finish 
                    rezults={rezults}
                    quiz={quiz}
                    onReplay={this.onReplay}
                    />:
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