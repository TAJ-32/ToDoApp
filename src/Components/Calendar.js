import DatePicker from 'react-datepicker';
import styles from 'react-datepicker/dist/react-datepicker.css';
import globalstyle from '../styles/globals.css';

import { useState, useEffect } from 'react';

export default function Calendar({ task, deadline, setDeadline }) {
    // const [deadline, setDeadline] = useState(new Date().toLocaleDateString('fr-FR'));

    console.log("IN CALENDAR")

    
    return (
      <div>

        <br></br>
        <div className='token'>
        <h5>Select A Date</h5>
        </div>
        {/* <DatePicker className={styles} selected={date} onChange={(date) => setDeadline(date)} /> */}

        <DatePicker
            dateFormat="MM/dd/yyyy"
            value={deadline}
            onChange={(date) => {
                const d = new Date(date).toLocaleDateString('fr-FR');
                console.log("D: " + d);
                setDeadline(d);
            }}
        />

        <br></br>
        <br></br>

        
      
      
      </div>
    );
  }