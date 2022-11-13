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
            <div class="container">
            <span id="rateMe1"></span>
            </div>
            <div>Any Additional Comments: </div>
            <textarea id="comments" className="textarea"/>
            <br />
            <button class="btn btn-primary postButton" > Submit </button> 
            {/* onClick = {() => goToStart()} */}
            <br />
            {/* <button onClick={() => validateSignIn()}>Click to sign in</button> */}
        </div>
    )
//     return(
//         <div>
//             <div className="titleText">
//                 {/* Name: _Name_ */}
//                 {/* Survey Number: _Survey Number_*/}
//                 {/* Rating (Stars out of 5): _Rating_ */}
//                 {/* Additional Comments: _Comment Here_ */}
//                 {/* Post: <button>post to backend</button> */}
//             </div>
//             <span onClick={() => (setRatingTwo(false), setRatingThree(false), setRatingFour(false), setRatingFive(false))}>
//                 {<span>
//                 {
//                     <span class="checked">✭</span>
//                 }
//                 </span>}
//             </span>
//             <span onClick={() => (setRatingTwo(true), setRatingThree(false), setRatingFour(false), setRatingFive(false))}>✭</span>
//             <span onClick={() => (setRatingTwo(true), setRatingThree(true), setRatingFour(false), setRatingFive(false))}>✭</span>
//             <span onClick={() => (setRatingTwo(true), setRatingThree(true), setRatingFour(true), setRatingFive(false))}>✭</span>
//             <span onClick={() => (setRatingTwo(true), setRatingThree(true), setRatingFour(true), setRatingFive(true))}>✭</span>
//             {/* <span class="fa fa-star checked">✭</span>
//             <span class="fa fa-star checked">✩</span> */}
            
// {/* <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star"></span>
// <span class="fa fa-star"></span> */}
//         </div>
//     )
}