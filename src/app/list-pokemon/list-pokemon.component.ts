import { Component } from '@angular/core';
import {POKEMONS} from "../mock-pokemon-list";
import {BorderCardDirective} from "../border-card.directive";
import {DatePipe, NgForOf} from "@angular/common";
import {PokemonTypeColorPipe} from "../pokemon-type-color.pipe";
import {Pokemon} from "../pokemon";

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [
    BorderCardDirective,
    DatePipe,
    NgForOf,
    PokemonTypeColorPipe
  ],
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent {

  pokemonList: Pokemon[] = POKEMONS; //pour envoi au template

}
