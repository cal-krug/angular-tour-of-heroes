import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // Asynchronous; will get refactored with API's later
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  // Synchronous won't work irl
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  constructor(private messageService: MessageService) {}
}
