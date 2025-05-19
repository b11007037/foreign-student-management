import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

function StudentDetail({ student }) {
  const navigate = useNavigate();

  // 返回上一頁或指定頁面
  const goBack = () => {
    navigate('/dashboard', { state: { activeComponent: 'StudentInfo' } });
  };

  return (
    <div className="student-detail-container">
      <div className='back-button-container'>
        <button className="back-button" onClick={goBack}>回到上一頁</button>
      </div>
      {/* 學生基本資料 */}
      <h3 className="student-section-title">學生基本資料</h3>
      <table className="student-detail-table">
        <tbody>
          <tr>
            <td className="student-cell title">學號：</td>
            <td className="student-cell">{student.id}</td>
            <td className="student-cell title">英文姓名：</td>
            <td className="student-cell">{student.englishName}</td>
            <td className="student-cell title">中文姓名：</td>
            <td className="student-cell">{student.name}</td>
          </tr>
          <tr>
            <td className="student-cell title">性別：</td>
            <td className="student-cell">{student.gender}</td>
            <td className="student-cell title">出生年月日：</td>
            <td className="student-cell">{student.birthDate}</td>
            <td className="student-cell title">國籍：</td>
            <td className="student-cell">{student.nationality}</td>
          </tr>
          <tr>
            <td className="student-cell title">科系：</td>
            <td className="student-cell">{student.dept}</td>
            <td className="student-cell title">年級：</td>
            <td className="student-cell">{student.grade}</td>
            <td className="student-cell title">班級：</td>
            <td className="student-cell">{student.class}</td>
          </tr>
        </tbody>
      </table>

      {/* 學生聯絡方式 */}
      <h3 className="student-section-title">學生聯絡方式</h3>
      <table className="student-detail-table">
        <tbody>
          <tr>
            <td className="student-cell title">Email：</td>
            <td className="student-cell">{student.email}</td>
          </tr>
          <tr>
            <td className="student-cell title">行動電話號碼：</td>
            <td className="student-cell">{student.phone}</td>
          </tr>
          <tr>
            <td className="student-cell title">學生現居地址：</td>
            <td className="student-cell">{student.address}</td>
          </tr>
        </tbody>
      </table>

      {/* 緊急連絡人資訊 */}
      <h3 className="student-section-title">緊急連絡人資訊</h3>
      <table className="student-detail-table">
        <tbody>
          <tr>
            <td className="student-cell title">緊急聯絡人姓名：</td>
            <td className="student-cell">{student.emergencyName}</td>
            <td className="student-cell title">緊急聯絡人電話號碼：</td>
            <td className="student-cell">{student.emergencyPhone}</td>
          </tr>
        </tbody>
      </table>

      {/* 證照資料 */}
      <h3 className="student-section-title">證照資料</h3>
      <table className="student-detail-table">
        <tbody>
          <tr>
            <td className="student-cell title">簽證類型：</td>
            <td className="student-cell">{student.visaType}</td>
          </tr>
          <tr>
            <td className="student-cell title">簽證號碼：</td>
            <td className="student-cell">{student.visaNumber}</td>
          </tr>
          <tr>
            <td className="student-cell title">工作證號碼：</td>
            <td className="student-cell">{student.workPermitNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentDetail;
