import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import { CommonModule } from "@angular/common";
import {Pokemon} from "../pokemon";
import {POKEMONS} from "../mock-pokemon-list";
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    PokemonTypeColorPipe,
    RouterLink
  ],
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon|undefined;
  constructor( private route: ActivatedRoute, private router: Router ) {}
  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if ( pokemonId ) {
      this.pokemon = POKEMONS.find( pokemon => pokemon.id == +pokemonId )
    }
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

}
