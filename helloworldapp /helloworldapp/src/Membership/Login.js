import React from "react";
import {useNavigate} from "react-router-dom";

class Login extends React.Component{

  constructor(props){
  super(props);
  this.state={
    username: "sejalkulkarni017@gmail.com",
    password: "sejal"
  };

  

}

    render(){
       return (
  <div>
    <form>
      
      <div className="form-group">
        <label htmlFor="email">Email address:</label>
        <input type="email" value={this.state.username} onChange={(Event)=>{
          this.setState({username:Event.target.value})
        }}
        className="form-control" id="email" 
        
        />
      </div>

      <div className="form-group">
        <label htmlFor="pwd">Password:</label>
        <input type="password" value={this.state.password} onChange={(Event)=>{
          this.setState({password:Event.target.value})
        }}
        className="form-control" id="pwd" />
      </div>

      <div className="checkbox">
        <label>
          <input type="checkbox" /> Remember me
        </label>
      </div>

      <button type="submit" className="btn btn-success" onClick={()=>{
         event.preventDefault();
        if(this.state.username=="sejalkulkarni017@gmail.com" & this.state.password=="sejal"){
          console.log("valid user");
          
        }
        else
        {
          console.log("invalid user");
        }
      }}
      >
        Submit
      </button>

    </form>
  </div>
);
    }
}

    export default Login;
