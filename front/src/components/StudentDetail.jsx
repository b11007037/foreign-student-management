import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import translations from '../i18n/lang';

function StudentDetail({ student }) {
  const navigate = useNavigate();
  const lang = localStorage.getItem('lang') || 'zh';
  const t = translations[lang];

  const goBack = () => {
    navigate('/dashboard', { state: { activeComponent: 'StudentInfo' } });
  };

  return (
    <div className="student-detail-container">
      <div className='back-button-container'>
        <button className="back-button" onClick={goBack}>{t.back}</button>
      </div>

      {/* 學生基本資料 */}
      <h3 className="student-section-title">{t.basicInfoTitle}</h3>
      <table className="student-detail-table">
        <tbody>
          <tr>
            <td className="student-cell title">{t.studentID}：</td>
            <td className="student-cell">{student.id}</td>
            <td className="student-cell title">{t.englishName}：</td>
            <td className="student-cell">{student.englishName}</td>
            <td className="student-cell title">{t.chineseName}：</td>
            <td className="student-cell">{student.name}</td>
          </tr>
          <tr>
            <td className="student-cell title">{t.gender}：</td>
            <td className="student-cell">{student.gender}</td>
            <td className="student-cell title">{t.dateOfBirth}：</td>
            <td className="student-cell">{student.birthDate}</td>
            <td className="student-cell title">{t.nationality}：</td>
            <td className="student-cell">{student.nationality}</td>
          </tr>
          <tr>
            <td className="student-cell title">{t.department}：</td>
            <td className="student-cell">{student.dept}</td>
            <td className="student-cell title">{t.grade}：</td>
            <td className="student-cell">{student.grade}</td>
            <td className="student-cell title">{t.class}：</td>
            <td className="student-cell">{student.class}</td>
          </tr>
        </tbody>
      </table>

      {/* 學生聯絡方式 */}
      <h3 className="student-section-title">{t.studentContactTitle}</h3>
      <table className="student-detail-table">
        <tbody>
          <tr>
            <td className="student-cell title">{t.email}：</td>
            <td className="student-cell">{student.email}</td>
          </tr>
          <tr>
            <td className="student-cell title">{t.mobileNumber}：</td>
            <td className="student-cell">{student.phone}</td>
          </tr>
          <tr>
            <td className="student-cell title">{t.currentAddress}：</td>
            <td className="student-cell">{student.address}</td>
          </tr>
        </tbody>
      </table>

      {/* 緊急連絡人資訊 */}
      <h3 className="student-section-title">{t.emergencyContactTitle}</h3>
      <table className="student-detail-table">
        <tbody>
          <tr>
            <td className="student-cell title">{t.emergencyContactName}：</td>
            <td className="student-cell">{student.emergencyName}</td>
            <td className="student-cell title">{t.emergencyContactPhone}：</td>
            <td className="student-cell">{student.emergencyPhone}</td>
          </tr>
        </tbody>
      </table>

      {/* 證照資料 */}
      <h3 className="student-section-title">{t.certificateInfoTitle}</h3>
      <table className="student-detail-table">
        <tbody>
          <tr>
            <td className="student-cell title">{t.visaType}：</td>
            <td className="student-cell">{student.visaType}</td>
          </tr>
          <tr>
            <td className="student-cell title">{t.visaNumber}：</td>
            <td className="student-cell">{student.visaNumber}</td>
          </tr>
          <tr>
            <td className="student-cell title">{t.workPermitNumber}：</td>
            <td className="student-cell">{student.workPermitNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentDetail;
