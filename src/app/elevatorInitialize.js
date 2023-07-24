exports.callJSFun=function(){
   // Elevator script included on the page, already.

    // Simple elevator usage.
    var elementButton = document.querySelector(".elevator");
    console.log(elementButton);
    var elevator = new Elevator({
      element: elementButton,
      mainAudio: "../assets/music/elevator.mp3", // Music from http://www.bensound.com/
      endAudio: "../assets/music/ding.mp3",
    });
}
