import React from 'react';
import EmployeeService from './EmployeeService';

class ViewEmployeeComponent extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            id:1,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeId(this.state.id).then(res =>{
            this.setState({employee: res.data});
        })
    }

render(){

return(
    <div>
        <br></br>
        <div ClassName = "card col-md-6 offset-md-3">
            <h3 ClassNAme ="text-center">view Employee Details</h3>
            <div ClassName = "card-body" >
                <div ClassName = "row">
                    <label>Employee First Name:</label>
                   
                </div>
            </div>

        </div>
    </div>
)
}



}

export default ViewEmployeeComponent;