import { Hero } from 'src/app/models/Hero';
import { Component, OnInit } from '@angular/core';
import { heroes } from 'src/app/models/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  listHeroes: Hero[] = heroes
  selectedHero?: Hero

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }


}
