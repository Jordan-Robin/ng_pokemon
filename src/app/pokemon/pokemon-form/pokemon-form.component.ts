import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../../pokemon";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {PokemonTypeColorPipe} from "../../pokemon-type-color.pipe";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [
    FormsModule,
    PokemonTypeColorPipe,
    CommonModule
  ],
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
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

  isTypesValid( type: string ): boolean {

    if ( this.pokemon.types.length == 1 && this.hasType(type) ) {
      return false;
    }

    if ( this.pokemon.types.length > 2 && !this.hasType(type) ) {
      return false;
    }

    return true;
  }

}
