import React from "react";

import { Chart as ChartJS } from 'chart.js/auto'

import { Line } from "react-chartjs-2";


// hide x-axys label
const  options = {
  scales: {
    x: { 
      ticks: {
        display: false
      }
    }
  }
}



export default function Chart({data}) {
  return (
    <div>
      <Line data={data}  options={options} />
    </div>
  );
}
