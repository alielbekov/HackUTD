import React from "react";
import {Response} from "../responseMessage.js"
// 
import { Doughnut } from 'react-chartjs-2';
// 

export default function Home(){

  let [positive, setPositive] = React.useState(80)
  let [negative, setNegative] = React.useState(20)

  function postReview(){
    fetch("http://127.0.0.1:5000/getSentiment", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'comment': document.getElementById("comments").value})
    })
      .then(data => data.json())
      .then((data) => {
          if(data.message == "Success!"){
            alert(data.polarity);
          }else{
              alert("Polarity: "+data.polarity + '\n' + "Most common words: " + data.common_matched_words
              + "\n" + "Message length: " + data.length + "\n" + "Negative match score: " + data.negative_match + "\n" + "negative_match_words: " +  data.positive_match);
          }
      })
      .catch((error) => {
        console.log(error.data);
        console.log("error!")
      })
      }

  function calcValues(){
    // setPositive(document.getElementById("rangeInput"))
    // let input = document.getElementById("comments").value
    let num = document.getElementById("rangeInput").value
    num*=20
    setPositive(num)
    setNegative(100-num)
  }

    return(
      <div className="row d-flex justify-content-center ">
      <div className = "surveyWrapper  m-3 p-3 my-3">
            <div className="surveyInput">
                <div>What is your name: </div>
                <input type="text" id="name" className="nameInput" />
                <div>Leave a rating:</div>
                <br />

                {/*}<span class="checked">✭</span>
                 <span onClick={() => (setRatingTwo(true), setRatingThree(false), setRatingFour(false), setRatingFive(false))}>✭</span> */}

                <div>
                <span className="surveyInputValue">0</span>
                <span className="surveyInputValue">1</span>
                <span className="surveyInputValue">2</span>
                <span className="surveyInputValue">3</span>
                <span className="surveyInputValue">4</span>
                <span>5</span>
                </div>
                <input className = "isInput" id="rangeInput" type="range" min="0" max="5" />
                <br />

                <div>Your review here: </div>
                <textarea id="comments" className="textarea"/>
                <br />
                <button className="btn btn-success postButton" onClick={()=>{ postReview(); }}> Submit </button>
                {/* onClick = {() => goToStart()} */}
                <br />
                {/* <button onClick={() => validateSignIn()}>Click to sign in</button> */}
          </div>
          {/* <Response polarity = {"Hello"} /> */}
          {/* 
           */}
           <div>
  <div className="doughnutData">
        <Doughnut data = {{
          labels: [
            'Positive',
            'Negative',
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [positive, negative],
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
           {/* 
            */}
      </div>


      </div>
    )
}
