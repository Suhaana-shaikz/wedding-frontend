import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-groom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './groom.html',
  styleUrls: ['./groom.css']
})
export class Groom implements OnInit {

  event: any; // ✅ simple variable

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvent().subscribe(res => {
      this.event = res?._embedded?.eventEntities?.[0]; // ✅ clean data
    });
  }
}