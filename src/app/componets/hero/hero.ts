import { Component } from '@angular/core';
import { EventService } from '../../services/event';



@Component({
  selector: 'app-hero',
  standalone:true,
  
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  
  event?:Event;
  constructor(private eventservice:EventService){

  }


  // ngOnInit(): void {
  //      this.eventservice.getEvent().subscribe(data => {
  //     this.event = data;
  //   });
  //   throw new Error('Method not implemented.');
  // }


}
