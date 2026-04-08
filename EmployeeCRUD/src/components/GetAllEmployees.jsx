import React, { useEffect, useState } from "react";

function GetAllEmployees() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:5283/api/employees/get");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      console.log("Fetched data:", data);

      // Use actual array from response, or fallback to empty array
      const empArray = Array.isArray(data) ? data : data.employees || [];
      setEmployees(empArray);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>All Employees</h2>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <ul>
          {employees.map((emp, index) => (
            <li key={emp.Id || index}>
              {emp.FirstName} {emp.LastName} ({emp.EmailId})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GetAllEmployees;