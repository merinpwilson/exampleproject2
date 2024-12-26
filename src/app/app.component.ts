import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { CardComponent } from "./card/card.component";
import { StatesComponent } from "./page/states/states.component";
import { HomeComponent } from "./page/home/home.component";
import { ContactComponent } from "./page/contact/contact.component";
import { SinglestateComponent } from './page/singlestate/singlestate.component';

@Component({
  selector: 'app-root',         
   imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
 
export class AppComponent
{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}