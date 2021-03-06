import {Component} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'views/heroes.component.html',
    styleUrls: ['css/heroes.component.css']
})
export class HeroesComponent implements  OnInit{

    constructor(private heroService: HeroService, private router: Router) { }


    heroes: Hero[];

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    selectedHero: Hero;

    onSelect(hero : Hero) : void {
        this.selectedHero = hero
    }

    gotoDetail():void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}
