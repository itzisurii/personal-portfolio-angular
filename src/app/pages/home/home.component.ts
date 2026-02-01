import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { LandingPageComponent } from "../../components/landing-page/landing-page.component";

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, LandingPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
