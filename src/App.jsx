import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Student from "./Students";
import Teacher from "./Teacher";
import Admin from "./Admin";

function App() {
  const [user, setUser] = useState(null);

  // 🚀 Load user from localStorage on first render
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // 🚀 Whenever user changes, save it to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setUser={setUser} />} />
        <Route path="/student" element={<Student user={user} setUser={setUser} />} />
        <Route path="/teacher" element={<Teacher user={user} setUser={setUser} />} />
        <Route path="/admin" element={<Admin user={user} setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
