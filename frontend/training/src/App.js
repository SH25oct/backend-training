import React, { useEffect } from "react";
import { useState } from "react";
import UsersTable from "./components/UsersTable";

const App = () => {
  const [data, SetData] = useState("");

  const getData = async () => {
    const response = await fetch("http://localhost:5000/profile");
    if (!response.ok) {
      throw new Error("network response was not ok ");
    }
    const result = await response.text();
    SetData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>{data}</div>
      <UsersTable />
    </div>
  );
};

export default App;
