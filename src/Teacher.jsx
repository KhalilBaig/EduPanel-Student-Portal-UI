// src/Teacher.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// React Icons
import { FaUsers, FaChalkboardTeacher, FaTasks } from "react-icons/fa";
import { FiLogOut, FiMoon, FiSun } from "react-icons/fi";

function Teacher({ user, setUser }) {
    const navigate = useNavigate();
    const [dark, setDark] = useState(true);

    // restore session from localStorage
    useEffect(() => {
        if (!user) {
            const savedUser = localStorage.getItem("user");
            if (savedUser) {
                setUser(JSON.parse(savedUser));
            }
        }
    }, [user, setUser]);

    // role guard
    useEffect(() => {
        if (!user || user.role !== "Teacher") {
            navigate("/");
        }
        document.body.className = dark ? "dark-theme" : "light-theme";
    }, [user, navigate, dark]);

    if (!user) return null;

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <div className="app-container">
            <header className="page-header">
                <h1>👨‍🏫 Teacher Dashboard</h1>
                <p>
                    Welcome back, <b>{user.name}</b>!
                </p>
                <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                    <button onClick={handleLogout} className="btn-logout">
                        <FiLogOut /> Logout
                    </button>
                    <button
                        onClick={() => setDark(!dark)}
                        className="btn"
                        style={{ width: "auto" }}
                    >
                        {dark ? <FiSun /> : <FiMoon />} Theme
                    </button>
                </div>
            </header>

            <section className="section">
                <h2 className="section-title"><FaUsers /> Enrolled Students</h2>
                <ul className="card">
                    <li>Ali Khan – CS101</li>
                    <li>Sara Ahmed – CS101</li>
                    <li>Bilal Iqbal – MTH115</li>
                    <li>Ayesha Noor – MTH115</li>
                    <li>Taha Zaman – MTH115</li>
                    <li>Ayub Khan – MTH115</li>
                </ul>
            </section>

            <section className="section">
                <h2 className="section-title"><FaChalkboardTeacher /> My Classes</h2>
                <ul className="card">
                    <li>CS101 - Intro to Programming</li>
                    <li>MTH115 - Discrete Mathematics</li>
                </ul>
            </section>

            <section className="section">
                <h2 className="section-title"><FaTasks /> Pending Grading</h2>
                <ul className="card">
                    <li>CS101 - Assignment 1 (12 submissions)</li>
                    <li>MTH115 - Quiz 01 (8 submissions)</li>
                </ul>
            </section>

            <footer className="footer">© 2025 EduPanel • Teacher Portal</footer>
        </div>
    );
}

export default Teacher;
