import { Component, OnInit } from '@angular/core';
import Hero from "../types/hero.type";

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[] = [
    { id : 1, name :'Batman' },
    { id : 2, name : 'Superman' },
    { id : 3, name : 'Spiderman' },
    ];

  selectedHero!:  Hero;

  constructor() { }

  selectHero(hero: Hero){
    this.selectedHero = hero;
  }
  ngOnInit(): void {
  }

}
