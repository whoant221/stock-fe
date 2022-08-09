import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    Tooltip,
    PointElement,
    Filler,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Filler
);

const Chart = ({ music }) => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: [
                '12:00',
                '',
                '14:00',
                '',
                '16:00',
                '',
                '18:00',
                '',
                '20:00',
                '',
                '22:00',
                '',
                '00:00',
                '',
                '2:00',
                '',
                '4:00',
                '',
                '6:00',
                '',
                '8:00',
                '',
                '10:00',
                '',
            ],
            datasets: [
                {
                    tension: 0.3,
                    data: [
                        1, 5, 4, 8, 9, 6, 5, 7, 4, 8, 9, 2, 1, 5, 4, 8, 9, 6, 5,
                        7, 4, 8, 9, 2,
                    ],
                    borderColor: 'orange',
                    backgroundColor: 'rgba(250, 160, 95, 0.26)',
                    pointStyle: 'none',
                    pointRadius: 2,
                    pointBorderWidth: 4,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: 'rgb(53, 162, 235)',
                    pointHoverBorderColor: 'rgb(53, 162, 235)',
                    pointHoverBorderWidth: 2,
                    pointBorderColor: 'orange',
                },
                {
                    tension: 0.3,
                    // data: music?.items[1].map(
                    //     (item) => item.counter
                    // ),
                    borderColor: 'orange',
                    backgroundColor: 'rgba(250, 160, 95, 0.26)',
                    pointStyle: 'none',
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    pointBorderColor: 'orange',
                },
                {
                    tension: 0.3,
                    // data: music?.items[2].map(
                    //     (item) => item.counter
                    // ),
                    borderColor: 'orange',
                    backgroundColor: 'rgba(250, 160, 95, 0.26)',
                    pointStyle: 'none',
                    pointRadius: 0,
                    pointBorderColor: 'orange',
                },
            ],
        });
        setChartOptions({
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 10,
                    stepSize: 1,
                    grid: {
                        display: true,
                    },
                    ticks: {
                        maxTicksLimit: 5,
                        display: false,
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                },
            },
        });
    }, []);

    return <Line options={chartOptions} data={chartData} height='70px' />;
};

export default Chart;
