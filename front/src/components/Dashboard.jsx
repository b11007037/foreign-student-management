import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import translations from '../i18n/lang';
import CertificateExpiry from './CertificateExpiry';
import StudentInfo from './StudentInfo';
import StudentDetail from './StudentDetail';
import MessageBox from './MessageBox'

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  // 開啟元件
  const [activeComponent, setActiveComponent] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedItem, setSelectedItem] = useState('');
  //語言
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
  //登出
  const handleLogout = () => {
    navigate('/'); 
  };
  // 顯示指定的元件
  const [showModal, setShowModal] = useState(false);
  const showComponent = (componentName, itemName) => {
    setActiveComponent(componentName);
    setSelectedItem(itemName);
    // 彈出視窗
    if (componentName === 'CertificateExpiry') {
      setShowModal(true);
    }
  };
  // 關閉彈出視窗
  const handleCloseModal = () => {
    setShowModal(false);
  };
  // 顯示學生詳細資料
  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setActiveComponent('studentDetail');
  };
  // 學生詳細資料回到上一頁
  useEffect(() => {
  if (location.state?.activeComponent) {
    setActiveComponent(location.state.activeComponent);
  }
  }, [location]);
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
            <li 
              className={`menu-item ${selectedItem === 'StudentInfo' ? 'selected' : ''}`} 
              tabIndex="0" 
              onClick={() => showComponent('StudentInfo', 'StudentInfo')}
            >
              <span className="menu-text">{t.studentInfo}</span>
              <span className="arrow">◀</span>
            </li>
            <li 
              className={`menu-item ${selectedItem === 'CertificateExpiry' ? 'selected' : ''}`} 
              tabIndex="0" 
              onClick={() => showComponent('CertificateExpiry', 'CertificateExpiry')}
            >
              <span className="menu-text">{t.certificateExpiry}</span>
              <span className="arrow">◀</span>
            </li>
          </ul>
        </aside>

        <section className="content">
          {activeComponent === '' && (
            <div className="welcome-message">
              <p>{t.greeting}</p>
              <p>{t.welcomeMessage}</p>
            </div>
          )}
          {activeComponent === 'CertificateExpiry' && (
            <CertificateExpiry />
          )}
          {activeComponent === 'StudentInfo' && (
            <StudentInfo onViewDetails={handleViewDetails} />
          )}
          {activeComponent === 'studentDetail' && selectedStudent && (
            <StudentDetail student={selectedStudent} />
          )}
        </section>

        <MessageBox
          show={showModal}
          onClose={handleCloseModal}
          message={t.expiryNoticeMessage}
        />
      </div>
    </div>
  );
}

export default Dashboard;