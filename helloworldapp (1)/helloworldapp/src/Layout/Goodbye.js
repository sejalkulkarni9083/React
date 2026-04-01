
import React from 'react';
import {useNavigate} from "react-router-dom";

const GoodBye = () =>{
  const navigate = useNavigate();

  const handleHelloclick = () =>{
    console.log("Hello button is clicked")
    navigate('/');
  }
  
    return (
        <div>
          <h2>Thank you for accepting me as your mentor</h2>
          <button onClick={handleHelloclick}  className="btn btn-success" >Hello</button>

        </div>
    );
  }


export default GoodBye;
