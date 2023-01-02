import React from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";

function ChatBody(props){
  
  return (
    <div className="main__chatbody">
        <ChatList />
        <ChatContent logout={props.logout}/>                
      </div>
  );
}

export default ChatBody;
