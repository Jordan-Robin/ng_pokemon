import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'page-404',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <div>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="pokemonInconnu"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/pokemons">
        Retourner à l' accueil
      </a>
    </div>
  `,
  styles: ``
})
export class PageNotFoundComponent {}
