import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {EventService} from '../../event.service';
import { MatSnackBar } from '@angular/material';
import { preferedTransport } from 'src/app/preferedTransport.model';


@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

 id:String;

  events: Event[];
  
  foods: preferedTransport[] = [
    {value: 'own-0', viewValue: 'own'},
    {value: 'company provided-1', viewValue: 'companyProvided'},  
  ];
  displayedColumns = ['event', 'description', 'venue', 'datetime', 'transport', 'preferedTransport', 'status'];

  constructor(private eventService: EventService, private router: Router,private snackBar: MatSnackBar, private route: ActivatedRoute) { }

  ngOnInit() {
  
   this.fetchEvents();         
  }

fetchEvents() {
  this.eventService
  .getEvents()
  .subscribe((data:Event[])=>{
    this.events = data;
    console.log('Data requested...');
    console.log(this.events);
  }) 
}

updateEvent(id,status) {
if(status)
{
status = false
}
else
{
status = true
}
this.eventService.updateEvent(id, status).subscribe(() => {
  if(status){
    this.snackBar.open('Your are registered for this event', 'OK', {
      duration: 3000,      
    });
  }
else
  {
    this.snackBar.open('Your are deregistered for this event', 'OK', {
      duration: 3000,   
  });
}
    this.fetchEvents();
  });
  
}
}
