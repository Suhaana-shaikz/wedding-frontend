import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.html',
  styleUrls: ['./location.css']
})
export class Location implements OnInit {

  event: any;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvent().subscribe(res => {
      this.event = res?._embedded?.eventEntities?.[0];
    });
  }
}