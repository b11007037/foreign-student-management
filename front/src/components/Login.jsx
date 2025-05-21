import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import translations from '../i18n/lang';

function Login() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'zh');
  const [t, setT] = useState(translations['zh']);
  const navigate = useNavigate();
  const toggleLanguage = () => {
    const newLang = lang === 'zh' ? 'en' : 'zh';
    setLang(newLang);
    localStorage.setItem('lang', newLang);  // 儲存語言設定
  };

  useEffect(() => {
    setT(translations[lang]);
  }, [lang]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (account.trim() && password.trim()) {
      // 跳轉並傳帳號作為 teacherName
      navigate('/dashboard', { state: { teacherName: account } });
    } else {
      alert('t.accountPlaceholder');
    }
    // 傳送資料到後端
    /*
    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!account.trim() || !password.trim()) {
      alert(t.emptyAccountOrPassword || '請輸入帳號與密碼');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ account, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.message || t.loginFailed || '登入失敗，請檢查帳號或密碼');
        return;
      }

      const data = await res.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard', { state: { teacherName: account } });
      } else {
        alert(t.loginFailed || '登入失敗，請檢查帳號或密碼');
      }
    } catch (err) {
      console.error('登入錯誤:', err);
      alert(t.serverError || '伺服器錯誤，請稍後再試');
    }
    */  
  };
  return (
    <div className="login-container">
      <div className="language-switch" onClick={toggleLanguage}>
        {t.languageSwitch}
      </div>
      <div className="login-title">　{t.title}　</div>
      <form className="login-box" onSubmit={handleSubmit}>
        
        <div className="input-group">
          <span className="icon">👤</span>
          <input
            type="text"
            placeholder={t.accountPlaceholder}
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <span className="icon">🔒</span>
          <input
            type="password"
            placeholder={t.passwordPlaceholder}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="login-button" type="submit">
          {t.loginButton}
        </button>
      </form>
    </div>
  );
}

export default Login;