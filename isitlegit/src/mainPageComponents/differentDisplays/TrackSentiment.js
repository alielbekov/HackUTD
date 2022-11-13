import React from "react";
import Chart from 'chart.js/auto';
import {Line} from 'react-chartjs-2'

// let holder = "abc";

export default function TrackSentiment(){

    let [holder, setHolder] = React.useState("abc");

    function getTheChart(input){
        switch(input){
            case('CompanyA'):
                return [88,80,96,83,68,98]
            case('CBRE'):
                return [88,95,96,98,99,100]
            case('@brittneySpears'):
                return [85,82,80,83,83,85]
            case('@steven'):
                return [90,20,10,90,20,10]
            case('Apple'):
                return [90,80,70,60,70,98]
            default:
                return [88,95,96,83,68,98]
        }
    }

    return(
      <div>
          <div className="titleText">
                 Find a user or company to search for:
                 <div>
                     <input type="text" name="search" id="search" className="search" placeholder="Search here, start with an @ if you want to search for a user"/>
                 </div>
                 <button type="button" className="btn btn-dark searchButton" onClick={() => {setHolder(document.getElementById('search').value)}}>Search</button>
                 {/* Search for user or company: (search box) (start with an @ for user, otherwise assumes company)*/}
                 {/* Chart.js components showing sentiment over time */}
             </div>
             
        <div className="chart">
                <Line width={50} height = {20}
                data= {{
            labels: ['10 am', '10:30 am', '11 am', '11:30 am', '12 pm', '12:30 pm'],
            datasets: [{
                label: 'Sentiment over time',
                data: getTheChart(holder),
                backgroundColor: 'rgba(0, 0, 0, 1)',
                borderColor: '#004d00',
                borderWidth: 1
            }]
        }}/>
    </div>
    </div>
    )
}
