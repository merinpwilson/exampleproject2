import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-singlestate',
  imports: [],
  templateUrl: './singlestate.component.html',
  styleUrl: './singlestate.component.css'
})
export class SinglestateComponent {
      constructor(private activated:ActivatedRoute,public api:ApiService){}
      data:any;
      ngOnInit()
      {
         let id =this.activated.snapshot.paramMap.get('id');
         this.data = this.api.getStatebyId(id);
         console.log('State ID:',id);
      }
}   
