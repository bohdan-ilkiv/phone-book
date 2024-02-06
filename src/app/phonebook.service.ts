import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/departments.json');
  }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/employees.json');
  }
}
