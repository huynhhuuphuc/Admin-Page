import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Dashboard from "./components/Dashboard";
import PostManagement from "./components/PostManagement";
import Subcription from "./components/Subcription";
import Revenue from "./components/Revenue";
import Setting from "./components/Setting";

function App() {
  return (
    <div>
      <Router>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/subcription" element={<Subcription />} />
            <Route path="/dashboard/revenue" element={<Revenue />} />
            <Route path="/post-management" element={<PostManagement />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
