import { Component } from '@angular/core';
import { CardComponent } from "../../card/card.component";
import { NavComponent } from "../../nav/nav.component";
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-states',
  imports: [CardComponent],
  templateUrl: './states.component.html',
  styleUrl: './states.component.css'
})
export class StatesComponent 
{
  constructor(public api:ApiService){}
}
