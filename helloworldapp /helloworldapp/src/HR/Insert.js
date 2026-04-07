import React from 'react';
import EmployeeServices from './EmployeeServices';

class CreateEmployeeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            firstname:'',
            lastname:'',
            email:''
        };
    }

    componentDidMount(){

    }

render(){
    return(
        <div>
            <h2> Insert new Employee</h2>
            
        </div>
    )
}

}

export default CreateEmployeeComponent;