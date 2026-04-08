import React, { useState } from "react";

function InsertEmployee() {
  const [employee, setEmployee] = useState({ FirstName: "", LastName: "", EmailId: "" });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5283/api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee),
      });
      if (response.ok) {
        alert("Employee inserted successfully");
        setEmployee({ FirstName: "", LastName: "", EmailId: "" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Insert Employee</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default InsertEmployee;