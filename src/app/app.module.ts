import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { CdkDragDropComponent } from './cdk-drag-drop/cdk-drag-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CdkDragDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
