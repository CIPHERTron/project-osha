import React from "react"

const Camera = () =>{
    var constraints = { audio: true, video: { width: window.innerWidth/2, height: (window.innerWidth/2)*(9/16) } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function(mediaStream) {
        var video = document.querySelector("video");

        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
          video.play();
        };
      })
    return (
      <div className="Camera">
        <video className="WebcamFeed" autoPlay={true} id="videoElement" controls></video>
      </div>
    );
  }
  
export default Camera;