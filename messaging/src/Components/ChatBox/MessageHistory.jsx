import React, { Component } from 'react'
import './Chat_Dev.css'


export default class MessagesHistory extends Component {
  
    handleClick=(id)=>{
        console.log(id,"xdhbvmnbv")
       }

    render() {
        console.log(this.props,"sdjabvfsakjb")
      return(

       [].concat(this.props.items).map(item => (
          <div className={"message " + (item.type=="outgoing" ? "outgoing" : "incoming")} key={item.id}>
            <div class="message-body"   onClick={()=>this.handleClick(item.id)}>
              {item.msg}
            </div>
          </div>
        ))
        
      )
    }
  }