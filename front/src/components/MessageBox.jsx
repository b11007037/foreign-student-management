import React from 'react';
import './Dashboard.css';
import translations from '../i18n/lang';

function MessageBox({ show, onClose, message }) {
  if (!show) return null;

  const lang = localStorage.getItem('lang') || 'zh';
  const t = translations[lang];

  const displayMessage = message || (messageKey && t[messageKey]) || '';

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="modal-message">{displayMessage}</p>
        <button className="modal-close" onClick={onClose}>{t.close}</button>
      </div>
    </div>
  );
}

export default MessageBox;