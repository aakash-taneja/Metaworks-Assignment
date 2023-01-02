import React from "react";
import { useState, useEffect } from "react";
import Web3 from "web3";
import ChatBody from "../components/chatBody/ChatBody";
import "./Login.css";
import logo from "./telegramlogo.png";

const Login = () => {
  const [isConnected, setIsConnected] = useState(false);

  const detectCurrentProvider = () => {
    let provider;
    //check if metamask has injected the functionality
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non-ethereum browser detected. You should install Metamask");
    }
    return provider;
  };
  // because we are connecting with the wallet and using web3 so it can be an async call coz you are featching balance info and accounts info so it can be an async call
  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        // this will featch all the ethereunm based accounts that are part of your metamask if you have more than 1 acc then it will fetch all of them
        await currentProvider.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0]; //first account out of all the accounts
        console.log(account);
        setIsConnected(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  //logout method
  const onDisconnect = () => {
    setIsConnected(false);
  };

  return (    
    <div className="login">
      {!isConnected && (
        <div className="ima">
          <div>
            <img src={logo} alt="telegram logo" />
            <h1>Telegram</h1> 
          </div>
          <button className="app-button__login" onClick={onConnect}>
            Login
          </button>
        </div>
      )}
      {/* showing info upon log in  */}
      {isConnected && (
          <ChatBody logout={onDisconnect}/>        
      )}
    </div>
  );
};

export default Login;
