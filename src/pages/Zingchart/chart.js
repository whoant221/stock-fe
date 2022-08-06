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
                max: 20,
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
                offset: true,
                data: music.map((item) => item.highestPosition),
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
                data: music.map((item) => item.oldPosition),
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
                data: music.map((item) => item.position),
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
