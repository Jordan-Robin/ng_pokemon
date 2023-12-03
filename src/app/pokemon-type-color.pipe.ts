import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor',
  standalone: true
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {

    let color: string;

    switch (type) {
      case 'Feu':
        color = 'btn-danger';
        break;
      case 'Eau':
        color = 'btn-primary';
        break;
      case 'Plante':
        color = 'btn-success';
        break;
      case 'Insecte':
        color = 'btn-dark';
        break;
      case 'Normal':
        color = 'btn-light';
        break;
      case 'Vol':
        color = 'btn-info';
        break;
      case 'Poison':
        color = 'btn-secondary';
        break;
      case 'Fée':
        color = 'btn-warning';
        break;
      case 'Psy':
        color = 'btn-success';
        break;
      case 'Electrik':
        color = 'btn-warning';
        break;
      case 'Combat':
        color = 'btn-danger';
        break;
      default:
        color = 'grey';
        break;
    }

    return 'btn ' + color;

  }

}
