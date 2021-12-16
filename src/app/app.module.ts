import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SelecteurBateauComponent } from './selecteur-bateau/selecteur-bateau.component';
import { VoileBateauComponent } from './voile-bateau/voile-bateau.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import {RouterModule, Routes} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

const appRoutes:Routes=[
  {path:'',component:SelecteurBateauComponent},
  {path:'selecteur-bateau',component:SelecteurBateauComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    SelecteurBateauComponent,
    VoileBateauComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
