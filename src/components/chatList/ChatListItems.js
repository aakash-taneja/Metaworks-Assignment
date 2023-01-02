import React from "react";
import Avatar from "./Avatar";

function ChatListItems (props){
  const selectChat = (e) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };
  return (
    <div
      style={{ animationDelay: `0.${props.animationDelay}s` }}
      onClick={selectChat}
      className={`chatlist__item ${
        props.active ? props.active : ""
      } `}
    >
      <Avatar
        image={
          props.image ? props.image : "http://placehold.it/80x80"
        }        
      />

      <div className="userMeta">
        <div className="nameAndTime">
          <div className="chatName">{props.name}</div>
          <div className="chatTime">{props.time}</div>
        </div>
        <div className="lastmessageAndUnseen">
          <div className="chatlstmsg">{props.lastmsg}</div>
          <div className="chatunrd">{props.unread}</div>
        </div>
      </div>
    </div>
  );
}

export default ChatListItems;
