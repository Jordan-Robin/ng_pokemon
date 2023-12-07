import {Component, OnInit} from '@angular/core';
import {BorderCardDirective} from "../border-card.directive";
import {DatePipe, CommonModule} from "@angular/common";
import {PokemonTypeColorPipe} from "../pokemon-type-color.pipe";
import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";
import {PokemonService} from "../pokemon/pokemon.service";

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
export class ListPokemonComponent implements OnInit {

  pokemonList: Pokemon[];

  constructor( private router: Router, private pokemonService: PokemonService ) {}

  ngOnInit() {
    this.pokemonList = this.pokemonService.getPokemonList();
  }

  goToPokemon( pokemon: Pokemon ) {
    this.router.navigate(["/pokemon", pokemon.id])
  }

}
