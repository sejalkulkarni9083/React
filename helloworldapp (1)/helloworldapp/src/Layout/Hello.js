import React from 'react';
import { useNavigate } from "react-router-dom";


const Hello = () => {
  const navigate = useNavigate();

  const handleGoodbyeClick = () => {
    console.log(" Goodbye button is clicked")
    navigate('/Goodbye');
  }

  const handleLoginClick = () => {
    console.log(" SignIn button is clicked")
    navigate('/Login');
  } 

    return (
        <div>
          <h2>Welcome to transflower</h2>
          <button onClick= {handleGoodbyeClick}  className="btn btn-success"  >Goodbye</button>
          <button onClick= {handleLoginClick}    className="btn btn-success" >SignIn</button>
        </div>
    );

  }


export default Hello;
