import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Demo01Component } from './demo/demo01/demo01.component';
import { Demo02Component } from './demo/demo02/demo02.component';
import { Demo03Component } from './demo/demo03/demo03.component';
import { Exo01Component } from './exos/exo01/exo01.component';
import { FormsModule } from '@angular/forms';
import { Demo04Component } from './demo/demo04/demo04.component';
import { Demo05Component } from './demo/demo05/demo05.component';
import { Demo06Component } from './demo/demo06/demo06.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Demo04Component,
    Demo05Component,
    Demo06Component,
    Exo01Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
