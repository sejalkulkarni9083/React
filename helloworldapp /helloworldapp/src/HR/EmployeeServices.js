// import axios from 'axios';

// const EMPLOYEE_APP_BASE_URL = "http://localhost:5283/api/employees";

// class EmployeeService {

//      getEmployees() {
//         return axios.get(EMPLOYEE_APP_BASE_URL + "/get");   
//     }


//     createEmployee(employee) {
//         return axios.post(EMPLOYEE_APP_BASE_URL, employee);
//     }

//     getEmployeeById(employeeId) {
//         return axios.get(EMPLOYEE_APP_BASE_URL + "/" + employeeId);
//     }

//     updateEmployee(employee, employeeId) {
//         return axios.put(EMPLOYEE_APP_BASE_URL + "/" + employeeId, employee);
//     }

//     deleteEmployee(employeeId) {
//         return axios.delete(EMPLOYEE_APP_BASE_URL + "/" + employeeId);
//     }
// }


// export default new EmployeeService();

import React, { useEffect, useState } from "react";

function EmployeeServices() {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5283/api/employees/get")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setEmployees(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center">Loading employees...</p>;

    return (
        <div className="container mt-4">
            <h2 className="text-center">Employee List</h2>
            {error && <div className="alert alert-danger">Error: {error.message || error.toString()}</div>}
            
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email ID</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.emailId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeServices;