import { Tabs } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import TabScreen from "./Screens/TabScreen";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tabScreen" element={<TabScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
