import React from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

const Dashboard = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <Navbar />
      <Table />
    </div>
  );
};

export default Dashboard;
