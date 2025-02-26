import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';
import { JokeValue } from '../../models/joke-value.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss'
})
export class JokeComponent {
  public joke?: JokeValue;

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.getJoke();
  }

  getJoke() {
    this.jokeService.getJoke().then(joke => {
      this.joke = joke;
    });
  }

}
