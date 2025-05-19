import React, { useState } from 'react';
import './Dashboard.css';

const mockData = [
    { 
      id: 's02507001', name: '學生壹', dept: '資訊管理系', grade: '四年級', class: 'A',
      visaStart: '2025-07-25', visaEnd: '2026-07-25', 
      workStart: '2025-08-28', workEnd: '2026-02-18' 
    },
    { 
      id: 's02507002', name: '學生厄', dept: '資訊管理系', grade: '四年級', class: 'A',
      visaStart: '2025-07-25', visaEnd: '2026-07-25', 
      workStart: '2025-08-28', workEnd: '2026-02-18' 
    },
    { 
      id: 's02507003', name: '學生參', dept: '資訊管理系', grade: '四年級', class: 'A',
      visaStart: '2025-07-25', visaEnd: '2026-07-25', 
      workStart: '2025-08-28', workEnd: '2026-02-18' 
    },
    { 
      id: 's02507004', name: '學生寺', dept: '資訊管理系', grade: '四年級', class: 'A',
      visaStart: '2025-07-25', visaEnd: '2026-07-25', 
      workStart: '2025-08-28', workEnd: '2026-02-18' 
    },
    { 
      id: 's02507005', name: '學生舞', dept: '資訊管理系', grade: '四年級', class: 'A',
      visaStart: '2025-07-25', visaEnd: '2026-07-25', 
      workStart: '2025-08-28', workEnd: '2026-02-18' 
    },
    { 
      id: 's02507006', name: '學生溜', dept: '資訊管理系', grade: '四年級', class: 'A',
      visaStart: '2025-07-25', visaEnd: '2026-07-25', 
      workStart: '2025-08-28', workEnd: '2026-02-18' 
    },
    { 
      id: 's02507007', name: '學生柒', dept: '資訊管理系', grade: '四年級', class: 'A',
      visaStart: '2025-07-25', visaEnd: '2026-07-25', 
      workStart: '2025-08-28', workEnd: '2026-02-18' 
    },
  ];

function CertificateExpiry() {
  const tableHeaders = [
    '學號', '姓名', '系所', '年級', '班級', 
    '簽證號碼生效日', '簽證號碼到期日', 
    '工作證號碼生效日', '工作證號碼到期日'
  ];
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [filteredData, setFilteredData] = useState(mockData);
  const handleFilter = () => {
    const result = mockData.filter((student) => {
      return (
        (selectedDept === '' || student.dept === selectedDept) &&
        (selectedGrade === '' || student.grade === selectedGrade) &&
        (selectedClass === '' || student.class === selectedClass)
      );
    });
    setFilteredData([...result]);
  };
  return (
    <div className="license-expiry">
      <div className="filter-container">
        {/* 正確的 onChange 綁定到 <select> 元素 */}
        <select className="filter-select" onChange={(e) => setSelectedDept(e.target.value)} value={selectedDept}>
          <option value="">請選擇系所</option>
          <option value="資訊管理系">資訊管理系</option>
          <option value="應用華語系">應用華語系</option>
        </select>
        <select className="filter-select" onChange={(e) => setSelectedGrade(e.target.value)} value={selectedGrade}>
          <option value="">請選擇年級</option>
          <option value="一年級">一年級</option>
          <option value="二年級">二年級</option>
          <option value="三年級">三年級</option>
          <option value="四年級">四年級</option>
        </select>
        <select className="filter-select" onChange={(e) => setSelectedClass(e.target.value)} value={selectedClass}>
          <option value="">請選擇班級</option>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
        <button className="confirm-button" onClick={handleFilter}>確定</button>
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
            {filteredData.length > 0 ? (
              filteredData.map((student, index) => (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.dept}</td>
                  <td>{student.grade}</td>
                  <td>{student.class}</td>
                  <td>{student.visaStart}</td>
                  <td>{student.visaEnd}</td>
                  <td>{student.workStart}</td>
                  <td>{student.workEnd}</td>
                </tr>
              ))
            ):(
              <tr>
                <td colSpan={tableHeaders.length} style={{ color: '#999' }}>
                  尚無資料
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default CertificateExpiry;