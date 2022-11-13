import React from "react";
export default function Home(){
    let [ratingOne, setRatingOne] = React.useState(true)
    let [ratingTwo, setRatingTwo] = React.useState(false)
    let [ratingThree, setRatingThree] = React.useState(false)
    let [ratingFour, setRatingFour] = React.useState(false)
    let [ratingFive, setRatingFive] = React.useState(false)
    return(
        <div className="surveyInput">
            <div>What is your Name: </div>
            <input type="text" id="name" className="nameInput" />
            <div>Leave a Rating:</div>

            <span class="checked">✭</span>
            <span onClick={() => (setRatingTwo(true), setRatingThree(false), setRatingFour(false), setRatingFive(false))}>✭</span>
            <div>Any Additional Comments: </div>
            <textarea id="comments" className="textarea"/>
            <br />
            <button class="btn btn-primary postButton" > Submit </button>
            {/* onClick = {() => goToStart()} */}
            <br />
            {/* <button onClick={() => validateSignIn()}>Click to sign in</button> */}
        </div>
    )
}
