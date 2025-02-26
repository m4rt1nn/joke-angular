import { Injectable } from '@angular/core';
import { JokeApiService } from './joke-api.service';
import { JokeValue } from '../models/joke-value.model';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private apiService: JokeApiService) { }

  async getJoke(): Promise<JokeValue> {
    return await lastValueFrom(this.apiService.getJoke());
  }
}
