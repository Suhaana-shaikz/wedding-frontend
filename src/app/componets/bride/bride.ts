import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event';
import { EventModel } from '../../models/model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-bride',
  imports: [CommonModule],
  templateUrl: './bride.html',
  styleUrls: ['./bride.css'],
})
export class Bride implements OnInit {
event?: EventModel;  // ✅ declare event variable

  constructor(private eventService: EventService) {}

  ngOnInit(): void {

    this.eventService.getEvent().subscribe(data => {
      this.event = data;

      this.event = data._embedded.eventEntities[0];

      console.log("Event:", this.event?.brideName);
     

    });

  }

}
