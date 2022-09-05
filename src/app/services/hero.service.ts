import { MessageService } from './message.service';
import { Injectable } from '@angular/core';

import { Hero } from './../models/Hero';
import { finalize, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'

  constructor(private messageService: MessageService,
              private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(heroes => this.log('fetched ' + heroes.length + ' heroes '))
    )
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(this.heroesUrl + '/' + id).pipe(
      tap(hero => this.log('fetched hero: ' + hero.name))
    )
  }

  private log(message: string): void {
    this.messageService.add('HeroService: ' + message)
  }
}
