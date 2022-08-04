import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export function Chart({ music }) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip
    );

    const options = {
        hover: {
            mode: 'nearest',
            axis: 'x',
            intersect: false,
        },

        scales: {
            y: {
                min: 0,
                max: 80,
                stepSize: 4,
                gridLines: {
                    display: true,
                },
                ticks: {
                    maxTicksLimit: 5,
                    display: false,
                },
            },
            x: {
                gridLines: {
                    display: true,
                },
            },
        },
    };

    const labels = [
        '11:00',
        '13:00',
        '',
        '15:00',
        '',
        '17:00',
        '',
        '19:00',
        '',
        '21:00',
        '',
        '23:00',
        '',
        '1:00',
        '',
        '3:00',
        '',
        '5:00',
        '',
        '7:00',
    ];
    
    const data = {
        labels,
        datasets: [
            {
                offset:true,
                data: [
                    60, 55, 52, 50, 48, 48, 47, 50, 53, 60, 66, 67, 56, 60, 55, 52, 50, 53, 55, 57, 
                ],
                label: music[0].title,
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderCapStyle: 'butt',
                borderDash: [],
                tension: 0.4,
                pointBorderColor: 'rgb(255, 99, 132)',
                pointBorderWidth: 1,
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointHoverRadius: 8,
                pointHoverBackgroundColor: 'rgb(255, 99, 132)',
                pointHoverBorderColor: 'rgb(255, 99, 132)',
                pointHoverBorderWidth: 2,
            },
            {
                data: [
                    40, 41, 43, 39, 37, 44, 46, 39, 39, 40, 41, 43, 39, 37, 44, 46, 39, 39, 33, 30, 
                ],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderWidth: 2,
                tension: 0.4,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.1,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(53, 162, 235)',
                pointBackgroundColor: 'rgba(53, 162, 235, 0.5)',
                pointBorderWidth: 4,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: 'rgb(53, 162, 235)',
                pointHoverBorderColor: 'rgb(53, 162, 235)',
                pointHoverBorderWidth: 2,
            },
            {
                data: [
                    35, 33, 35, 34, 35, 30, 30, 30, 32, 31, 28, 34, 36, 35, 34, 30, 30, 32, 34, 34, 
                ],
                borderColor: 'rgb(39, 186, 156)',
                backgroundColor: 'rgb(39, 186, 156)',
                borderWidth: 2,
                borderCapStyle: 'butt',
                borderDash: [],
                tension: 0.4,
                borderDashOffset: 0.1,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(39, 186, 156)',
                pointBackgroundColor: 'rgb(39, 186, 156)',
                pointBorderWidth: 4,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: 'rgb(39, 186, 156)',
                pointHoverBorderColor: 'rgb(39, 186, 156)',
                pointHoverBorderWidth: 2,
            },
        ],
    };

    return <Line height='342px' width='950px' options={options} data={data} />;
}
