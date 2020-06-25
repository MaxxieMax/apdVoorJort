import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asterix_en_Obelix } from './types';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsterixJsonService {

  constructor(private httpClient: HttpClient) { }

  GetAllAsterix_en_Obelix(): Observable<Asterix_en_Obelix[]> {
    return this.httpClient.get<Asterix_en_Obelix[]>("./assets/data/data.json");
  }
}
