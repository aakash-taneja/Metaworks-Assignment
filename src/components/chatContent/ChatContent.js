import React from "react";
import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import { useEffect, useState, useRef } from "react";

import {chatItms} from './chats'
import Modal from "../Modal/Modal";

function ChatContent(props) {
  // chatItms[0].type='other';
  // chatItms[3].type='other';
  // chatItms[7].type='other';
  
  const messagesEndRef = useRef(null);
  const onStateChange = (e) => {
    console.log(e.target.value);
    setMessage( message = e.target.value);
  };
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    setChat([...chatItms]);
    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (message !=="") {
          chatItms.push({
            // key: 1,
            type: "",
            fullname: message,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
          });
          setChat([...chatItms]);
          scrollToBottom();
          setMessage( message= "" );
        }
      }
    });
    scrollToBottom();
  },[]);
  let [message, setMessage] = useState("");
  let [chat, setChat] = useState([]);
  const[show,setShow]= useState(false);  
  const[photo,setPhoto]= useState();   
  const hiddenFileInput = useRef(null);
  
  const handleSend=()=>{
    hiddenFileInput.current.click();
  }
  const handleChange = event => {
    const fileurl = event.target.files[0];
    setPhoto(URL.createObjectURL(fileurl));
    setShow(true);
  };
  return (    
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar
              isOnline="active"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
            />
            <div className="channel">
              <p className="mainusername">Crypto Price News</p>
              <p className="membersonline">5944 members, 177 online</p>
            </div>
          </div>
        </div>

        <div className="blocks">
          <div className="settings">
            <button className="btn-nobg">
              <i className="fa fa-search"></i>
            </button>
            <button className="btn-nobg">
              <i className="fa fa-ellipsis-v"></i>
            </button>
            <button onClick={props.logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="content__body">
        <div className="content__chats">
          <div className="chat__items">
            {chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  // key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  name={itm.fullname}
                  image={itm.image}
                  price={itm.price}
                />
              );
            })}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <button className="btnSendMsg" id="sendMsgBtn">
            <i className="fa fa-smile-o"></i>
          </button>
          <Modal show={show} onClose={()=>setShow(false)} img={photo}/>
          <input
            type="text"
            placeholder="Message"
            onChange={onStateChange}
            value={message}
          />
          <button className="addFiles" id = "get_file" onClick={handleSend}>
            <i className="fa fa-paperclip"></i>
          </button>
          <input type="file" id="my_file" name="file" ref={hiddenFileInput} onChange={handleChange}/>          
        </div>
        <div>
          <button className="mic" >
            <i class="fa fa-microphone"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatContent;
