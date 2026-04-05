import React from "react";

class Register extends React.Component{

    constructor(props){
  super(props);
  this.state={
    firstname:"sejal",
    lastname:"kulkarni",
    email: "sejalkulkarni017@gmail.com",
    password: "sejal"
  };
    }
    render(){
        return (
            <div>
                <h2>Transflower Registration</h2>
                <hr/>
                 {/* <form>  */}
                    <label>First Name</label>
                    <input type= "text" value={this.state.firstname} onChange={(Event)=>{
                                     this.setState({firstname:Event.target.value})
                                       }}/>
                    <br/>

                      <label>Last Name</label>
                    <input type= "text" value={this.state.lastname} onChange={(Event)=>{
                                     this.setState({lastname:Event.target.value})
                                       }}/>
                    <br/>

                     <label>Email</label>
                    <input type= "text" value={this.state.email} onChange={(Event)=>{
                                    this.setState({email:Event.target.value})
                                       }}/>
                    <br/>

                     <label>password</label>
                    <input type= "password" value={this.state.password}onChange={(Event)=>{
                                    this.setState({password:Event.target.value})
                                       }} />
                    <br/>

                    <button
                    onClick={()=>{
                      console.log(this.state);
                     //store data into local storage
                      localStorage.setItem("customer",JSON.stringify(this.state));
                    }}
                    className="btn btn-success">Register</button>
                {/* </form>  */}
            </div>

        );

        }
    }

    export default Register;
