import { Component } from '@angular/core';
import {POKEMONS} from "../mock-pokemon-list";
import {BorderCardDirective} from "../border-card.directive";
import {DatePipe, CommonModule} from "@angular/common";
import {PokemonTypeColorPipe} from "../pokemon-type-color.pipe";
import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [
    BorderCardDirective,
    DatePipe,
    CommonModule,
    PokemonTypeColorPipe
  ],
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent {

  constructor( private router: Router ) {}

  pokemonList: Pokemon[] = POKEMONS; //pour envoi au template

  goToPokemon( pokemon: Pokemon ) {
    this.router.navigate(["/pokemon", pokemon.id])
  }

}
