import React from 'react';
import './Dashboard.css';

function MessageBox({ show, onClose, message }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="modal-message">{message}</p>
        <button className="modal-close" onClick={onClose}>關閉</button>
      </div>
    </div>
  );
}

export default MessageBox;