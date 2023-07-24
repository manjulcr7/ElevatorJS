import { Component, OnInit } from '@angular/core';
import * as Elevator from 'elevator.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../css/bootstrap.css',
    '../css/bootstrap.min.css',
    '../css/font-awesome.min.css',
    '../css/owl.carousel.min.css',
    '../css/owl.carousel.css',
    '../css/owl.theme.default.min.css',
    '../css/responsive.css',
    '../css/style.css',
    './app.component.css'

]
})
export class AppComponent implements OnInit {
  title = 'Elevator';
  ngOnInit(): void {
    // callJSFun();
    var elementButton = document.querySelector(".elevator");
    console.log(elementButton);
    var elevator = new Elevator({
      element: elementButton,
      mainAudio: "../assets/music/elevator.mp3", // Music from http://www.bensound.com/
      endAudio: "../assets/music/ding.mp3",
    });
    }
}
