import { MessageService } from './../../services/message.service';
import { HeroService } from './../../services/hero.service';
import { Hero } from 'src/app/models/Hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name']
  listHeroes: Hero[] = []

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getListHeroes()
  }

  getListHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.listHeroes = heroes);
  }




}
