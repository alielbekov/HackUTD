import React from "react";

export default function Home(){
    let [rating, setRatingOne] = React.useState(0)

    return(
        <div className="surveyInput">
            <div>What is your Name: </div>
            <input type="text" id="name" className="nameInput" />
            <div>Leave a Rating:</div>
            <br />

            {/*}<span class="checked">✭</span>
            <span onClick={() => (setRatingTwo(true), setRatingThree(false), setRatingFour(false), setRatingFive(false))}>✭</span> */}
            <div>
            <span class="surveyInputValue">0</span>
            <span class="surveyInputValue">1</span>
            <span class="surveyInputValue">2</span>
            <span class="surveyInputValue">3</span>
            <span class="surveyInputValue">4</span>
            <span class="">5</span>
            </div>
            <input className = "isInput" type="range" min="0" max="5" />
            <div>Any Additional Comments: </div>
            <textarea id="comments" className="textarea"/>
            <br />
            <button className="btn btn-success postButton" > Submit </button>
            {/* onClick = {() => goToStart()} */}
            <br />
            {/* <button onClick={() => validateSignIn()}>Click to sign in</button> */}
      </div>
    )
}
