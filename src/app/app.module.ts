import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { CdkDragDropComponent } from './cdk-drag-drop/cdk-drag-drop.component';
import { GameModule } from './game/game.module';
import { CdkDragDropModule } from './cdk-drag-drop/cdk-drag-drop.module';

@NgModule({
  declarations: [AppComponent, GameComponent, CdkDragDropComponent],
  imports: [BrowserModule, AppRoutingModule, GameModule, CdkDragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
