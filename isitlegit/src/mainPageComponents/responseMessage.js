import React from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


export const Response=({positiveRatio, negativeRatio, positiveWordsList, negativeWordsList})=>{
  return(
<div>
  <div className="doughnutData">
        <Doughnut data = {{
          labels: [
            'Positive',
            'Negative',
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [300, 50],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
            ],
            hoverOffset: 4
          }]
        }}
    />
  </div>

  </div>
)
}
