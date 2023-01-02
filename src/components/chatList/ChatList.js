import React, { useState } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

function  ChatList(){
  const allChats = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 1,
      name: "Crypto Price News",
      active: true,
      time:'10:00 AM',
      unread:20,
      lastmsg:'Metaworks Labs'

    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
      id: 2,
      name: "Ayub Rossi",
      active: false,
      time:'10:00 AM',
      unread:20,
      lastmsg:'Metaworks Labs'
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
      id: 3,
      name: "Hamaad Dejesus",
      active: false,
      time:'10:00 AM',
      unread:20,
      lastmsg:'Metaworks Labs'
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
      id: 4,
      name: "Eleni Hobbs",
      active: false,
      time:'10:00 AM',
      unread:20,
      lastmsg:'Metaworks Labs'
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
      id: 5,
      name: "Elsa Black",
      active: false,
      time:'10:00 AM',
      unread:20,
      lastmsg:'Metaworks Labs'
    },
    {
      image:
        "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
      id: 6,
      name: "Kayley Mellor",
      active: false,
      time:'10:00 AM',
      unread:20,
      lastmsg:'Metaworks Labs'
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
      id: 7,
      name: "Hasan Mcculloch",
      active: false,
      time:'10:00 AM',
      unread:20,
      lastmsg:'Metaworks Labs'
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
      id: 8,
      name: "Autumn Mckee",
      active: false,
      time:'10:00 AM',
      unread:20,
      lastmsg:'Metaworks Labs'
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
      id: 9,
      name: "Allen Woodley",
      active: false,
      time:'10:00 AM',
      unread:20,
      lastmsg:'Metaworks Labs'
    },
    {
      image: "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 10,
      name: "Manpreet David",
      active: false,
      time:'10:00 AM',
      unread:20,
      lastmsg:'Metaworks Labs'
    },
  ];
  const [query,setQuery] = useState("");
  return(
    <div className="main__chatlist">
        <div className="chatList__search">
          <button className="search-btn">
            <i className="fa fa-bars" ></i>
          </button>
          <div className="search_wrap">
            <input type="text" placeholder="&#xF002;  Search" required onChange={e=>setQuery(e.target.value)} style={{fontFamily:"Arial, FontAwesome"}}/>
          </div>
        </div>
        <div className="chatlist__items">
          {allChats.filter(user=>user.name.toLowerCase().includes(query)).map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                time={item.time}
                lastmsg={item.lastmsg}
                unread={item.unread}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
  );
}

export default ChatList;
