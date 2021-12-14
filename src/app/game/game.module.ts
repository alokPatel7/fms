import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';


@NgModule({
  declarations: [TicTacToeComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
