import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {EditPokemonComponent} from "./pokemon/edit-pokemon/edit-pokemon.component";

export const routes: Routes = [
    { path: 'edit/pokemon/:id',
        loadComponent: () => import('./pokemon/edit-pokemon/edit-pokemon.component').then(module => module.EditPokemonComponent)
        //mieux que { path: 'pokemons', component: EditPokemonComponent } (ne charge pas tous les components)
        //mettre export default const routes: Routes = [    permet d'enlever le .then(module...
    },
    { path: 'pokemons',
        title: 'Pokedex',
        loadComponent: () => import('./list-pokemon/list-pokemon.component').then(module => module.ListPokemonComponent)
    },
    { path: 'pokemon/:id',
        loadComponent: () => import('./detail-pokemon/detail-pokemon.component').then(module => module.DetailPokemonComponent)
    },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
    { path: '**',
        loadComponent: () => import('./page-not-found/page-not-found.component').then(module => module.PageNotFoundComponent)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}