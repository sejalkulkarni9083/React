import React, { useState } from "react";

function DeleteEmployee() {
  const [id, setId] = useState("");

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5283/api/employees/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Employee deleted successfully");
        setId("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Delete Employee</h2>
      <input
        placeholder="Employee Id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteEmployee;