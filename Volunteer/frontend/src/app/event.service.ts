import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get(`${this.uri}/events`);
  }

  updateEvent(id, status) {
    const event = {
      status: status
    };
    return this.http.post(`${this.uri}/events/update/${id}`, event);
  }
  
}
