import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { JokeValue } from '../models/joke-value.model';

@Injectable({
  providedIn: 'root'
})
export class JokeApiService {
  private baseUrl: string = environment.jokeUrl

  constructor(private client: HttpClient) { }

  getJoke() : Observable<JokeValue> {
    return this.client.get<JokeValue>(this.baseUrl + '/api/jokes/random')
  }
}
