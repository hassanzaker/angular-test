import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphContainerComponent } from './graph-container/graph-container.component';
import { RadialMenuComponent } from './graph-container/radial-menu/radial-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphContainerComponent,
    RadialMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
