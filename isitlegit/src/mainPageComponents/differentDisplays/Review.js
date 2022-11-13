import React from "react";
export default function Home(){
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
                <input className = "isInput" type="range" min="0" max="5" />
                <br />

                <div>Your review here: </div>
                <textarea id="comments" className="textarea"/>
                <br />
                <button className="btn btn-success postButton" onClick={()=>{ alert('Thank you for submitting your reviews!'); }}> Submit </button>
                {/* onClick = {() => goToStart()} */}
                <br />
                {/* <button onClick={() => validateSignIn()}>Click to sign in</button> */}
          </div>
      </div>


      </div>
    )
}
