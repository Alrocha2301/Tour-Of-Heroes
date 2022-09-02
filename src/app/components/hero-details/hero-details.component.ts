import { HeroService } from './../../services/hero.service';
import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero!: Hero

  constructor(private heroService: HeroService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHero();
  }

  

}
