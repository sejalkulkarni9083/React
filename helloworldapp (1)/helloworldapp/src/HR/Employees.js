import React from 'react';
import EmployeeService from './EmployeeService';


// eslint-disable-next-line no-undef
class ListEmployeeComponent extends React.Component {

    constructor(props){
        super(props);
        this.state={employees: []};

        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res =>{
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        })
    }

    viewEmployee(id){
        console.log("employee id: " + id);
    }

    editEmployee(id){
        console.log("employee id: " + id);
    }

    addEmployee(){
        console.log("employee added");

    }

    componntDidMount(){
        //dont call rest api call here
        //but get the data from employeeService
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees:res.data} );
        })
    }

    render(){
        return(
           <div>
               <h2 className="text-center">Employee List</h2>
               <div className="row"> 
                   <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
               </div>
               <div className="row">
                   <table className="table table-striped">
                       <thead>
                           <tr>
                               <th>Employee ID</th>
                               <th>Employee First Name</th>
                               <th>Employee Last Name</th>
                               <th>Employee Email Id</th>
                               <th>Actions</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.employees.map(
                                   employee =>
                                   <tr key={employee.id}>
                                       <td>{employee.id}</td>
                                       <td>{employee.firstName}</td>
                                       <td>{employee.lastName}</td>
                                       <td>{employee.email}</td>
                                       <td>
                                           <button className="btn btn-info" onClick={() => this.viewEmployee(employee.id)}>View</button>
                                           <button style={{marginLeft: "10px"}} className="btn btn-warning" onClick={() => this.editEmployee(employee.id)}>Edit</button>
                                           <button style={{marginLeft: "10px"}} className="btn btn-danger" onClick={() => this.deleteEmployee(employee.id)}>Delete</button>
                                       </td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>
               </div>
           </div>
        )

        
    }


} export default ListEmployeeComponent;