import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterOutlet
  ],
  templateUrl: 'app.component.html'
})
export class AppComponent {

  /*
  pokemonSelected: Pokemon | undefined; //pokemon sélectionné par l'utilisateur

  //1e possibilité de récupération d'un pokémon côté template
  //côté template : <input type="number" (click)="selectPokemon($event)">
  selectPokemon(event: MouseEvent) {
    const index: number = +( event.target as HTMLInputElement ).value;
    console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[index].name}`);
  }

  //2e possibilité :
  //côté template : <input type="number" #input (keyup)="selectPokemon(input.value)">
  selectPokemon( pokemonId: string ) {
    const id = +pokemonId;
    console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[id].name}`);
  }

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
  */
}
