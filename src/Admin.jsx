import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaClipboardCheck, FaBullhorn } from "react-icons/fa";
import { FiLogOut, FiMoon, FiSun } from "react-icons/fi";

function Admin({ user, setUser }) {
    const navigate = useNavigate();
    const [dark, setDark] = useState(true);

    // role guard
    useEffect(() => {
        if (!user || user.role !== "Admin") {
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
                <h1>⚡ Admin Dashboard</h1>
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
                <h2 className="section-title"><FaUsers /> Manage Users</h2>
                <ul className="card">
                    <li>👨‍🎓 120 Students</li>
                    <li>👩‍🏫 15 Teachers</li>
                    <li>🛠️ 3 Admins</li>
                </ul>
            </section>

            <section className="section">
                <h2 className="section-title"><FaClipboardCheck /> Reports & Analytics</h2>
                <ul className="card">
                    <li>📊 Attendance Report Generated</li>
                    <li>📈 Performance Analytics Updated</li>
                    <li>🗂️ Course Registrations Reviewed</li>
                </ul>
            </section>

            <section className="section">
                <h2 className="section-title"><FaBullhorn /> Announcements</h2>
                <div className="card">
                    <p>✅ Semester begins 1st September.</p>
                    <p>📢 Teacher orientation on 29th Aug.</p>
                    <p>⚡ New features coming to EduPanel soon!</p>
                </div>
            </section>

            <footer className="footer">© 2025 EduPanel • Admin Portal</footer>
        </div>
    );
}

export default Admin;
