import React from "react";
import Chart from 'chart.js/auto';

export default function TrackSentiment(){
    
    return(
        <div>
            <div className="titleText">
                Find a user or company to search for:
                <div>
                    <input type="text" name="search" className="search" placeholder="Search here, start with an @ if you want to search for a user"/>
                </div>
                <button type="button" className="btn btn-dark searchButton">Search</button>
                {/* Search for user or company: (search box) (start with an @ for user, otherwise assumes company)*/}
                {/* Chart.js components showing sentiment over time */}
            </div>
            <div>
                <canvas id="myChart2" />
            </div>
        </div>
    )
}

const ctx = document.getElementById('myChart2');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});