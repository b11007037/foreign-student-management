import React, { useState } from 'react';
import './Dashboard.css';

function CertificateExpiry() {
  const tableHeaders = [
    '學號', '姓名', '簽證號碼生效日', '簽證號碼到期日', 
    '工作證號碼生效日', '工作證號碼到期日'
  ];

  const mockData = [
    { 
      id: 's02507001', name: '學生壹', 
      visaStart: '20250725', visaEnd: '20260725', 
      workStart: '20250828', workEnd: '20260218' 
    },
    { 
      id: 's02507002', name: '學生厄', 
      visaStart: '20250725', visaEnd: '20260725', 
      workStart: '20250828', workEnd: '20260218' 
    },
    { 
      id: 's02507003', name: '學生參', 
      visaStart: '20250725', visaEnd: '20260725', 
      workStart: '20250828', workEnd: '20260218' 
    },
    { 
      id: 's02507004', name: '學生寺', 
      visaStart: '20250725', visaEnd: '20260725', 
      workStart: '20250828', workEnd: '20260218' 
    },
    { 
      id: 's02507005', name: '學生舞', 
      visaStart: '20250725', visaEnd: '20260725', 
      workStart: '20250828', workEnd: '20260218' 
    },
    { 
      id: 's02507006', name: '學生溜', 
      visaStart: '20250725', visaEnd: '20260725', 
      workStart: '20250828', workEnd: '20260218' 
    },
    { 
      id: 's02507007', name: '學生柒', 
      visaStart: '20250725', visaEnd: '20260725', 
      workStart: '20250828', workEnd: '20260218' 
    },
  ];
  
  return (
    <div className="license-expiry">
      <div className="filter-container">
        <select className="filter-select">
          <option>請選擇系所</option>
          <option>資訊管理系</option>
          <option>應用華語系</option>
        </select>
        <select className="filter-select">
          <option>請選擇年級</option>
          <option>一年級</option>
          <option>二年級</option>
          <option>三年級</option>
          <option>四年級</option>
        </select>
        <select className="filter-select">
          <option>請選擇班級</option>
          <option>A</option>
          <option>B</option>
        </select>
      </div>
      <div className="expiry-table-container">
        <table className="expiry-table">
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockData.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.visaStart}</td>
                <td>{student.visaEnd}</td>
                <td>{student.workStart}</td>
                <td>{student.workEnd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default CertificateExpiry;