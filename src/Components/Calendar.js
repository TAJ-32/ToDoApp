import DatePicker from 'react-datepicker';
import styles from 'react-datepicker/dist/react-datepicker.css';
import globalstyle from '../styles/globals.css';

import { useState, useEffect } from 'react';

export default function Calendar({ task }) {
    const [deadline, setDeadline] = useState(task ? task.deadline : new Date());

    return (
      <div>

        <br></br>
        <div className='token'>
        <h5>Select A Date</h5>
        </div>
        <DatePicker className={styles} selected={deadline} onChange={(deadline) => setDeadline(deadline)} />

        <br></br>
        <br></br>

        <hr />
      
      
      </div>
    );
  }