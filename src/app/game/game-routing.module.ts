import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    pathMatch: 'full',
  },
  {
    path: 'tic-tac-toe',
    component: TicTacToeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
