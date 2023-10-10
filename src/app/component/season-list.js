import Link from 'next/link';
import React from 'react';
import './component-css/season.css'
import { format, parseISO } from 'date-fns';



function formatDate(dateString) {
  try {
    // Parse the input ISO date string
    const parsedDate = parseISO(dateString);

    // Format the date as "d, MMMM, yyyy"
    return format(parsedDate, 'd, MMMM, yyyy');
  } catch (error) {
    console.error(`Error formatting date "${dateString}":`, error);
    return 'Invalid Date';
  }
}
const SeasonList = async ({data}) => {
 

    console.log('data',data)
    return (
        <div className='season-wrapper'>
            <div className='season-heading'>
                <h2>Car Seasons</h2>
                <Link href={'/seasons/add'}>Add New <span className='season-plus-icon'> +</span></Link>
            </div>
            <div className='dashboard-content-box'>
            <table className='season-table'>
      <thead className='season-thead'>
        <tr>
          <th>Name</th>
          <th>Starting Date</th>
          <th>Ending Date</th>
          <th>Margin</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className='season-tbody'>
        {data.map((item, index) => (
          
          <tr key={index} id='season-tr' className={index % 2 == 1 ? 'even-row' : 'odd-row'}>
            <td>{item.SeasonName}</td>
            <td>{formatDate(item.StartingDate)}</td>
            <td>{formatDate(item.EndingDate)}</td>
            <td>{ `${item.Margin}% ` }</td>
            <td>{item.Status  == 1? 'Active': 'InActive'}</td>
          </tr>
        ))} 
      </tbody>
    </table>
            </div>
        </div>
    );
}
export default SeasonList;











