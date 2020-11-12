import React, { Component } from 'react'
import './Chat_Dev.css'
import Dp from '../../Images/propic.jpg'
import { BsChevronLeft } from "react-icons/bs";
import { RiSendPlaneLine } from "react-icons/ri";
import TextField from '@material-ui/core/TextField';
import { v4 as uuidv4 } from 'uuid';
import uuid from "uuid";
import MessagesHistory from './MessageHistory'
export default class ChatBox extends  Component{
constructor(props){
    super(props)
    this.state={
        sender:[
            {
                'message': 'dfsdfsd',
                "messageId": "8",
                type: "incoming",
                
              },
         
        ],
        messages: [
        {id:'1',msg:'Hi Molly!', type:"outgoing"},
        {id:'2',msg:'Hey, how are you doing?', type:"incoming"},
        {id:'3',msg:'It\'s been a while', type:"incoming"},
        {id:'4',msg:'Yes it is!', type:"outgoing"},
        {id:'5',msg:'Have you ever heard of Facebook?', type:"outgoing"},
        {id:'6',msg:'No, what is it?', type:"incoming"},
        {id:'7',msg:'Facebook is a social networking site',type:"outgoing"},
        ],
      
       idd:[]
       
  
    }
}

handleChange =(e)=>{
console.log(e.target.value,"djfnksd")
 this.setState({
    message: e.target.value
 })
}

handleSubmit =(e,id)=> {
    e.preventDefault();
    if (!this.state.message.length) {
      return;
    }
    const newItem = {
    id: Date.now(),
    msg: this.state.message,
    type: "outgoing"
    };
  
    this.setState(state => ({
      messages: state.messages.concat(newItem),
      message: '',
     
    }));
  
    
        // for (let i = 0; i < this.state.messages.length; i++) {
        //     this.state.idd.push(
        //         this.state.messages[i].id
        //     )
            console.log(newItem.id,"snfjsn")
    }
   
  


render(){
    
    return(
        <div className="head_master">

            <div className="header">
                <div style={{display:"flex", alignItems:"center"}}>
                <BsChevronLeft className="lefty" />
                <img src={Dp} className="imgsize"/>
                <div className="u_name">UserName<div className="online">Active Now</div></div>
                </div>

                <div className="icon_opt">...</div>
            </div>

            <div class="messages-history">
            <MessagesHistory items={this.state.messages} />
          </div>
        
            <div className="text_typing">
            <div className="wrap_typing">
                <TextField 
                placeholder="Type Your Message Here" 
                value={this.state.message}
                onChange={(e)=>this.handleChange(e)}/> 
                <RiSendPlaneLine className="icons_fixng" onClick={(e)=>this.handleSubmit(e)}/> 
            </div>
            </div>
         
        </div>
    )
}
}