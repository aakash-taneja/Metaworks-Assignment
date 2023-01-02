import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";

//metamask addon inject a method - window.ethereum to all the webpages for doing all the web3 realtes tasks 
function App() {   
  
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path ="/" element={<Login />}/>
        </Routes>
      </Router>      
      
    </div>
  );
}

export default App;
