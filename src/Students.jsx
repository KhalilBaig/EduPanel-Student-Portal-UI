import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBook, FaClipboardList, FaBullhorn } from "react-icons/fa";
import { FiLogOut, FiMoon, FiSun } from "react-icons/fi";

function Students({ user, setUser }) {
    const navigate = useNavigate();
    const [dark, setDark] = useState(true);

    // role guard
    useEffect(() => {
        if (!user || user.role !== "Student") {
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
                <h1>🎓 Student Dashboard</h1>
                <p>Welcome back, <b>{user.name}</b>!</p>
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
                <h2 className="section-title"><FaBook /> My Courses</h2>
                <ul className="card">
                    <li>CS101 - Intro to Programming</li>
                    <li>MTH115 - Discrete Mathematics</li>
                    <li>ENG210 - English Composition</li>
                </ul>
            </section>

            <section className="section">
                <h2 className="section-title"><FaClipboardList /> Assignments</h2>
                <ul className="card">
                    <li>CS101 - Loops & Arrays Worksheet (Due 28 Aug)</li>
                    <li>MTH115 - Problem Set 02 (Due 27 Aug)</li>
                    <li>ENG210 - Essay Draft (Due 30 Aug)</li>
                </ul>
            </section>

            <section className="section">
                <h2 className="section-title"><FaBullhorn /> Announcements</h2>
                <div className="card">
                    <p>🎉 Welcome to EduPanel!</p>
                    <p>📢 CS101 lab moved to Wed 11:30 AM.</p>
                    <p>📝 MTH115 Quiz next Tuesday.</p>
                </div>
            </section>

            <footer className="footer">© 2025 EduPanel • Student Portal</footer>
        </div>
    );
}

export default Students;
