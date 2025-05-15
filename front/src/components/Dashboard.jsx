import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import translations from '../i18n/lang';

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'zh');
  const [t, setT] = useState(translations['zh']);
  const toggleLanguage = () => {
    const newLang = lang === 'zh' ? 'en' : 'zh';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };
  useEffect(() => {
      setT(translations[lang]);
    }, [lang]);
  const teacherName = location.state?.teacherName || '○○○';
  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>{ t.title }</h1>
        <a className="logout-link" href="#" onClick={handleLogout}>{ t.logoutButton }</a>
        <div className="language-switch" onClick={toggleLanguage}>
          {t.languageSwitch}
        </div>
      </header>
      <div className="dashboard-main">
        <aside className="sidebar">
          <ul>
            <li className="menu-item">
              <span className="menu-text">{t.studentInfo}</span>
              <span className="arrow">◀</span>
            </li>
            <li className="menu-item">
              <span className="menu-text">{t.certificateExpiry}</span>
              <span className="arrow">◀</span>
            </li>
            <li className="menu-item">
              <span className="menu-text">{t.studentResidence}</span>
              <span className="arrow">◀</span>
            </li>
          </ul>
        </aside>

        <section className="content">
          <p>{teacherName} {t.greeting} </p>
          <p>{ t.welcomeMessage }</p>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;