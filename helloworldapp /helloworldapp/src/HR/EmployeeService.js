import axios from 'axios';

const EMPLOYEE_APP_BASE_URL = "http://localhost:5283/api/employees";

class EmployeeService {

     getEmployees() {
        return axios.get(EMPLOYEE_APP_BASE_URL + "/get");   
    }


    createEmployee(employee) {
        return axios.post(EMPLOYEE_APP_BASE_URL, employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_APP_BASE_URL + "/" + employeeId);
    }

    updateEmployee(employee, employeeId) {
        return axios.put(EMPLOYEE_APP_BASE_URL + "/" + employeeId, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_APP_BASE_URL + "/" + employeeId);
    }
}


export default new EmployeeService();