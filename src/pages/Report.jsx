import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import '../styles/report.css'
import { Link } from 'react-router-dom';

function Report() {

      const id = 0

      const [selectedDate , setSelectedDate] = useState(null)
      const [selectedDate2 , setSelectedDate2] = useState(null)
      const date = new Date()
      const today = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate()

  return (
    <div className='report d-flex flex-column gap-4'>
            <div className="filter d-flex align-items-center gap-5">
                  <div className="search-bar border pt-1 pb-1 ps-3 pe-3 d-flex align-items-center gap-2 rounded-5">
                        <input type="text" placeholder='Search device...' className="rounded-4 border-0 w-100 p-1"/>
                  </div>
                  <div className="pick-date d-flex align-items-center gap-4">
                        <div className="data-picker d-flex align-items-center gap-2">
                              <label htmlFor="start Date">Start Day : </label>
                              <ReactDatePicker className='datepicker rounded-5 border-1 pt-2 pb-2' placeholderText={today} selected={selectedDate} onChange={date => setSelectedDate(date)} dateFormat='yyyy/MM/dd' />
                        </div>
                        <div className="data-picker d-flex align-items-center gap-2">
                              <label htmlFor="start Date">End Day : </label>
                              <ReactDatePicker className='datepicker rounded-5 border-1 pt-2 pb-2' placeholderText={today} selected={selectedDate2} onChange={date => setSelectedDate2(date)} dateFormat='yyyy/MM/dd' />
                        </div>
                  </div>
                  <div className="search-button">
                        <button className="btn btn-primary rounded-3"><i className="fa-solid fa-magnifying-glass"></i> Search</button>
                  </div>
                  <div className="refresh-button">
                        <button className="btn btn-primary rounded-3"><i class="fa-solid fa-rotate-right"></i> Refresh</button>
                  </div>
            </div>
            <div className="table w-100">
                  <div className="report-table-head rounded-3 bg-primary d-grid pt-2 pb-2 ps-3 pe-3">
                              <th className='text-light text-center'>Device ID</th>
                              <th className='text-light text-center'>Mashina raqami</th>
                              <th className='text-light text-center'>Haydovchi</th>
                              <th className='text-light text-center'>Telefon raqami</th>
                              <th className='text-light text-center'>Start date</th>
                              <th className='text-light text-center'>End date</th>
                              <th className='text-light text-center'>More</th>
                  </div>
                  <div className="report-table-body d-flex flex-column gap-2 pt-2 pb-2">
                        <div className="report-table-row border rounded-4 d-grid pt-2 pb-2 ps-3 pe-3 w-100">
                              <td className='text-center'>45</td>
                              <td className='text-center'>40 001 AAA</td>
                              <td className='text-center'>Raimjonov Abubakir</td>
                              <td className='text-center'>+998992293737</td>
                              <td className='text-center'>2024-03-15</td>
                              <td className='text-center'>2024-03-20</td>
                              <td>
                                    <Link to={`/report/${id}`} className='text-center text-dark text-decoration-none fw-bold'>More <i class="fa-solid fa-chevron-right"></i></Link>
                              </td>
                        </div>
                  </div>
            </div>
    </div>
  );
}

export default Report;