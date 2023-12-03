import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";

export const routes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}