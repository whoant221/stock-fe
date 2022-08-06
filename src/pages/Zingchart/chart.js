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

export function Chart({ chart }) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip
    );

    const chartItems = Object.values(chart.items)

    const options = {
        hover: {
            mode: 'nearest',
            axis: 'x',
            intersect: false,
        },

        scales: {
            y: {
                min: 0,
                max: chart.maxScore,
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
            }
        },
    };

    const labels = chart.times.map((time, index) => {
        if(index%2==0) {
            return `${time.hour} : 00`
        }
    });
    
    const data = {
        labels,
        datasets: [
            {
                offset:true,
                data: chartItems[0].map((item, index) => {
                    if(index%2==0) {
                        return item.counter
                    }
                }),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderWidth: 1,
                tension: 0.4,
                pointRadius: 1,
                pointHoverRadius: 6,
                pointBorderWidth: 0,
                pointHoverBorderWidth: 3,
                pointBorderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointHoverBackgroundColor: 'rgb(255, 99, 132)',
                pointHoverBorderColor: 'rgb(255, 255, 255)',
            },
            {
                data: chartItems[1].map((item, index) => {
                    if(index%2==0) {
                        return item.counter
                    }
                }),
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
                data: chartItems[2].map((item, index) => {
                    if(index%2==0) {
                        return item.counter
                    }
                }),
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
