import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {card} from '../models/card'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private baseUrl = 'http://localhost:9000/card/issue';
  constructor(private http: HttpClient) { }

  create(card:card): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, card);
  }

}
