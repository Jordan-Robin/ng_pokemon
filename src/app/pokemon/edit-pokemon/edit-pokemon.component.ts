import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../pokemon";
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../pokemon.service";
import {CommonModule} from "@angular/common";
import {PokemonFormComponent} from "../pokemon-form/pokemon-form.component";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    PokemonFormComponent
  ],
  template: `
    <h2 class="text-center mt-4">Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="text-center">
      <img [src]="pokemon.picture" alt="image de pokémon">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon | undefined;

  constructor(
      private route: ActivatedRoute,
      private pokemonService: PokemonService,
      private title: Title
  ) {  }

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if ( pokemonId ) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
      this.initTitle(this.pokemon)
    } else {
      this.pokemon = undefined;
    }
  }

  //Définir dynamiquement (avec paramètres) les titres des pages html
  initTitle(pokemon: Pokemon | undefined) {
    if ( !pokemon ) {
      this.title.setTitle('Pokemon not found');
      return;
    }
      this.title.setTitle(pokemon.name);
  }

}
