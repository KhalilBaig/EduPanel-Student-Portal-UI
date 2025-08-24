// src/Home.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";

function Home({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Student");
  const [localUser, setLocalUser] = useState(null);
  const [dark, setDark] = useState(true);

  const navigate = useNavigate();

  // check localStorage for session
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("edupanel_user"));
    if (savedUser) {
      setLocalUser(savedUser);
      setUser(savedUser);
    }
  }, [setUser]);

  // apply theme
  useEffect(() => {
    document.body.className = dark ? "dark-theme" : "light-theme";
  }, [dark]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, role };
    setLocalUser(newUser);
    setUser(newUser);
    localStorage.setItem("edupanel_user", JSON.stringify(newUser));

    // redirect based on role
    if (role === "Student") navigate("/student");
    if (role === "Teacher") navigate("/teacher");
    if (role === "Admin") navigate("/admin");
  };

  const handleLogout = () => {
    localStorage.removeItem("edupanel_user");
    setLocalUser(null);
    setUser(null);
    setName("");
    setEmail("");
    setRole("Student");
  };

  return (
    <div className="app-container">
      <div className="card">
        <div className="card-left">
          <div className="logo">📖</div>
        </div>
        <div className="card-right">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2 className="form-title">Choose Your Role</h2>
            {/* Theme toggle button */}
            <button
              type="button"
              className="btn"
              style={{ width: "auto", padding: "6px 12px" }}
              onClick={() => setDark(!dark)}
            >
              {dark ? <FiSun /> : <FiMoon />}
            </button>
          </div>

          <p className="form-desc">
            Welcome to EduPanel — your smart learning portal.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="e.g. Umair Khan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="e.g. umair@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option>Student</option>
                <option>Teacher</option>
                <option>Admin</option>
              </select>
            </div>

            <button type="submit" className="btn">
              Continue to Dashboard
            </button>
          </form>
        </div>
      </div>

      <footer className="footer">
        © 2025 EduPanel • Simplifying Learning Access
      </footer>
    </div>
  );
}

export default Home;
