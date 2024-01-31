import React from 'react'
import "./rate.css"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Rate() {
    const value = 5.6;
  return (
    <div className='rate'>
      

<CircularProgressbar value={value} maxValue={10} text={`${value}`} />;
    </div>
  )
}
