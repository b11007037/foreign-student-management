import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import translations from '../i18n/lang';
import CertificateExpiry from './CertificateExpiry';
import MessageBox from './MessageBox'

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState('');
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
   // 顯示指定的元件
  const [showModal, setShowModal] = useState(false);
  const showComponent = (componentName) => {
    setActiveComponent(componentName);

    // 如果是「證照到期通知」，直接彈窗
    if (componentName === 'CertificateExpiry') {
      setShowModal(true);
    }
  };
  // 關閉彈窗
  const handleCloseModal = () => {
    setShowModal(false);
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
            <li className="menu-item" tabIndex="0" onClick={() => showComponent('studentInfo')}>
              <span className="menu-text">{t.studentInfo}</span>
              <span className="arrow">◀</span>
            </li>
            <li className="menu-item" tabIndex="0" onClick={() => showComponent('CertificateExpiry')}>
              <span className="menu-text">{t.certificateExpiry}</span>
              <span className="arrow">◀</span>
            </li>
            <li className="menu-item" tabIndex="0" onClick={() => showComponent('studentResidence')}>
              <span className="menu-text">{t.studentResidence}</span>
              <span className="arrow">◀</span>
            </li>
          </ul>
        </aside>

        <section className="content">
          {activeComponent === '' && (
            <div className="welcome-message">
              <p>{teacherName}{t.greeting}</p>
              <p>{t.welcomeMessage}</p>
            </div>
          )}
          {activeComponent === 'CertificateExpiry' && (
            <CertificateExpiry />
          )}
        </section>
        
        <MessageBox
          show={showModal}
          onClose={handleCloseModal}
          message="已通知簽證/工作證到期之學生"
        />
      </div>
    </div>
  );
}

export default Dashboard;