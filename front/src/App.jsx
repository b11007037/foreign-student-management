import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import StudentInfo from './components/StudentInfo';
import StudentDetail from './components/StudentDetail';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [teacherName, setTeacherName] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/student-info" element={<StudentInfo />} />
        <Route path="/student-detail" element={<StudentDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
