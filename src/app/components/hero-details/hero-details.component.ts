import { MessageService } from './../../services/message.service';
import { HeroService } from './../../services/hero.service';
import { Hero } from 'src/app/models/Hero';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero!: Hero

  constructor(private heroService: HeroService,
              private location: Location,
              private messageService: MessageService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(id)
    this.heroService.getHero(id).subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back()
  }
}
