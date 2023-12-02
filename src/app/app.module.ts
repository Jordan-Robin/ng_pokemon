import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app.routes';
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }