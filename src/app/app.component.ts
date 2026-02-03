import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
declare var AOS: any;
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'isurika-portfolio';

  ngOnInit(): void {
    AOS.init({
      duration: 1000, // Animation length in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }
}
