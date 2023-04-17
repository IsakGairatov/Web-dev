import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {COMPANY, Company} from "./Models/Company";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  Base_url = 'http://127.0.0.1:8000/'
  constructor(private client: HttpClient) { }

  getCompList(): Observable<Company[]> {
    return this.client.get<Company[]>(`${this.Base_url}/api/companies`)
  }
  getComp(id: Number): Observable<Company> {
    return this.client.get<Company>(`${this.Base_url}/api/companies/${id}`)
  }
}
