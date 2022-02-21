import React from 'react';

import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'

Chart.register(ArcElement);

function Piechart(){

  const data = {
    datasets: [
      {
        label: 'Attendance for Week 1',
        data: [30,55,15],
        borderColor: ['rgba(255,206,86,0.2)'],
        backgroundColor: ['rgba(232,99,132,1)',
        'rgba(54,162,235,1)',
        'rgb(46, 176, 134)',
        'rgb(134, 198, 244)',
        
         ],
        pointBackgroundColor: 'rgba(255,206,86,0.2)',
        borderWidth:1
      }
      
    ],
    labels: ['Referral','direct','Social'],
}
 

const options = {
  
  plugins: {
      title: {
          display: true,
     
          color:'blue',
          font: {
              size:14
          },
          padding:{
              top:30,
              bottom:30
          },
          responsive:true,
          animation:{
              animateScale: true
                         }
      },
   
    }
  }
  return (
    <div className='pie'>
          <Doughnut data={data} options={options}   />
      </div>
  );
}

export default Piechart;


