import React from "react";
import { AuthContext } from "../context/AuthContext";
import {Link} from "react-router-dom"
import FormData from "./Form";

const Navbar = () => {
  const {isAuth,handleAuth} =React.useContext(AuthContext);
  
  return <div style={{display:"flex" ,justifyContent:"space-around"}}>
       {
        isAuth? <Link to="/Home">Home</Link> : <p>Home</p>

       }
      
      {
        isAuth?<Link to="/appointment/add">Form</Link>:<p>Form</p>
      }


       {
        isAuth? <button onClick={handleAuth}>Logout</button>:<Link to="/">Login</Link>
       }
     
  </div>;
};

export default Navbar;