import React, { useState } from "react";

function UpdateEmployee() {
  const [id, setId] = useState("");
  const [employee, setEmployee] = useState({ FirstName: "", LastName: "", EmailId: "" });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5283/api/employees/update/{id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee),
      });
      if (response.ok) {
        alert("Employee updated successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Update Employee</h2>
      <input
        placeholder="Employee Id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        name="FirstName"
        placeholder="First Name"
        value={employee.FirstName}
        onChange={handleChange}
      />
      <input
        name="LastName"
        placeholder="Last Name"
        value={employee.LastName}
        onChange={handleChange}
      />
      <input
        name="EmailId"
        placeholder="Email"
        value={employee.EmailId}
        onChange={handleChange}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateEmployee;