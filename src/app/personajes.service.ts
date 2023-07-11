import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje } from './models/personaje.Model';

const url = "http://localhost:3000/characters";

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Personaje[]>{
    return this.http.get<Personaje[]>(url);
  }

  create(data: any): Observable<any>{
    return this.http.post(url, data);
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put(`${url}/${id}`, data);
  }

}
