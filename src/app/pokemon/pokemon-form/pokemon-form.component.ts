import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../../pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-form.component.html'
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon;
  types: string[];

  constructor( private pokemonService: PokemonService, private router: Router ) {  }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType( type: string ): boolean {
    return this.pokemon.types.includes(type);
  }

  //ajoute ou enlève un type au pokémon quand l'utilisateur coche la case du type
  selectType( $event: Event, type: string ) {
    const isChecked: boolean = ( $event.target as HTMLInputElement ).checked;
    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  onSubmit() {
    console.log("Submit form !");
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }

}
