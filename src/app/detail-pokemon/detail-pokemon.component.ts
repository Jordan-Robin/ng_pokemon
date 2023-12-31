import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import { CommonModule } from "@angular/common";
import {Pokemon} from "../pokemon";
import {POKEMONS} from "../mock-pokemon-list";
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import {PokemonService} from "../pokemon/pokemon.service";
import {Title} from "@angular/platform-browser";

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

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private pokemonService: PokemonService,
      private title: Title
  ) {}

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if ( pokemonId ) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
      this.initTitle(this.pokemon);
    }
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon( pokemon: Pokemon ) {
    this.router.navigate(['/edit/pokemon', pokemon.id])
  }

  initTitle(pokemon: Pokemon | undefined) {
    if ( !pokemon ) {
      this.title.setTitle('Pokemon not found');
      return;
    }
    this.title.setTitle(pokemon.name);
  }

}
