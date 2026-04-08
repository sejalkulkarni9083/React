import React from "react";
import InsertEmployee from "./components/InsertEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import DeleteEmployee from "./components/DeleteEmployee";
import GetAllEmployees from "./components/GetAllEmployees";

function App() {
  return (
    <div>
      <h1>Employee Management</h1>
      <InsertEmployee />
      <UpdateEmployee />
      <DeleteEmployee />
      <GetAllEmployees />
    </div>
  );
}

export default App;