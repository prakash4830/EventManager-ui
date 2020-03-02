import { Component, OnInit, Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventList:any;

 
  constructor(private httpClient:HttpClient) {
    
   }

  ngOnInit(): void {
   this.getEventList();
  }

   getEventList()
   {
     let url="https://serene-escarpment-99047.herokuapp.com:8080/page1/page5";
     this.httpClient.get(url)
     .subscribe(response => {this.eventList=response;});
     
    
    }
  }
