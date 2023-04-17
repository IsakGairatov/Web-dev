import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vacancy} from "./Models/Vacancy";

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {
  Base_url = 'http://127.0.0.1:8000/'
  constructor(private client: HttpClient) { }

  getVansList(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.Base_url}/api/vacancies`)
  }

  getCompVacs(id : Number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.Base_url}/api/companies/${id}/vacancies`)
  }

  getVac(id: Number): Observable<Vacancy> {
    return this.client.get<Vacancy>(`${this.Base_url}/api/vacancies/${id}`)
  }
}
