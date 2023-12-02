import { Component, OnInit } from '@angular/core';
import { POKEMONS } from "./mock-pokemon-list";
import {Pokemon} from "./pokemon";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS; //pour envoi au template

  pokemonSelected: Pokemon | undefined; //pokemon sélectionné par l'utilisateur

  ngOnInit() {
    console.log( this.pokemonList );
  }

  //1e possibilité de récupération d'un pokémon côté template
  //côté template : <input type="number" (click)="selectPokemon($event)">
  /*selectPokemon(event: MouseEvent) {
    const index: number = +( event.target as HTMLInputElement ).value;
    console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[index].name}`);
  }*/

  //2e possibilité :
  /*selectPokemon( pokemonId: string ) {
    const id = +pokemonId;
    console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[id].name}`);
  }*/

  //Mais on veut afficher un message d'erreur si user saisit un chiffre > index
  //Et on veut que l'utilisateur puisse commencer sa saisit à partir de 1, et non 0
  //Pour ça, on utilise la fonction find() d'un tableau, qui peut renvoyer undefined
  selectPokemon( pokemonId: string ) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId );
    if (pokemon) {
      console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log("Vous avez cliqué sur un pokémon inexistant");
      this.pokemonSelected = undefined;
    }
  }

}
