import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  @Input() name: any;
  @Input() type: any;
  @Input() date: any;
  @Input() venue: any;

  
  constructor() { }

  ngOnInit(): void {
  }

}
