import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album} from "./Albs";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  base_url: string
  constructor(private client: HttpClient) {
    this.base_url = 'https://jsonplaceholder.typicode.com/albums';
  }

  getAlbums(): Observable<Album[]> {
      return this.client.get<Album[]>(`${this.base_url}`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.base_url}/${id}`);
  }
}
