import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'game',
    loadChildren: () =>
      import('./../game/game.module').then((m) => m.GameModule),
  },
  {
    path: 'cdkdragdrop',
    loadChildren: () =>
      import('./../cdk-drag-drop/cdk-drag-drop.module').then(
        (m) => m.CdkDragDropModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
