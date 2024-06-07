'use client'
import React, {useState, useEffect} from 'react';
import './chart.css'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import LegendBox from './legendBox';
import { Task, Total } from '@/types/types';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const [dataCounts, setDataCounts] = React.useState({ low: 0, medium: 0, high: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
        const tasks = await res.json();
        
        const counts = tasks.reduce((total:Total, task:Task) => {
          if (task.priority === 'LOW') total.low += 1;
          if (task.priority === 'MEDIUM') total.medium += 1;
          if (task.priority === 'HIGH') total.high += 1;
          return total;
        }, { low: 0, medium: 0, high: 0 });

        setDataCounts(counts);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: ['Low', 'Medium', 'Medium'],
    datasets: [
      {
        label: ['Low', 'Medium', 'High'],
        data: [dataCounts.low, dataCounts.medium, dataCounts.high],
        backgroundColor: ['#2F80ED', '#EB5757', '#F2C94C'],
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false, 
        grid: {
          display: false, 
        },
        barPercentage: 0.25,
        categoryPercentage: 0.25, 
      },
      y: {
        display: false, 
        grid: {
          display: false,
        },
      },
    },
    plugins: {
        legend: {
            display: false, 
            position: 'bottom',  
            align: 'center',
            labels: {
              usePointStyle: true,
            }, 
            textDirection:'ltr'
          },
      tooltip: {
        enabled: false,
      },
    },
    elements: {
      bar: {
        borderRadius: 30, 
      },
    },
  };

  return (
    <div className='content-box'>
      <div className='title-box'>
          <h2>Task Priorities</h2>
      </div>
      <div className='line'></div>
      <div className='p-3'>
      <Bar data={data} options={options} />
      <LegendBox/>
      </div>
    </div>
  );
};

export default BarChart;
