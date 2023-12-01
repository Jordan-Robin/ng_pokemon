import { Component, OnInit } from '@angular/core';
import { POKEMONS } from "./mock-pokemon-list";
import {Pokemon} from "./pokemon";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit() {
    console.log( this.pokemonList );
    this.selectPokemon( this.pokemonList[5] );
  }

  selectPokemon( pokemon: Pokemon ) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }

}
