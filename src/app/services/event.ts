

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = environment.apiUrl + '/eventdata';

  constructor(private http: HttpClient) {}

  getEvent(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}