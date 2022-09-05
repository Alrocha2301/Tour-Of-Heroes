import { MessageService } from './message.service';
import { heroes } from './../models/mock-heroes';
import { Injectable } from '@angular/core';

import { Hero } from './../models/Hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const listHeroes = of(heroes)
    // this.messageService.add('HeroService: fetched heroes')

    return listHeroes
  }

  getHero(id: number): Observable<Hero> {
    const hero = heroes.find(hero => hero.id === id)!
    this.messageService.add('HeroService: fetched hero name= ' + hero.name)
    return of(hero)
  }
}
