import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Pokemon} from "../pokemon";
import {POKEMONS} from "../mock-pokemon-list";

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})
export class DetailPokemonComponent {

  pokemon: Pokemon|undefined;

  constructor( private route: ActivatedRoute ) {}

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if ( pokemonId ) {
      this.pokemon = POKEMONS.find( pokemon => pokemon.id == +pokemonId )
    }
  }

}
