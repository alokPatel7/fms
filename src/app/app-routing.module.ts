import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'game',
  //   loadChildren: () =>
  //     import('././game/game.module').then((m) => m.GameModule),
  // },
  {
    path: '',
    loadChildren: () =>
      import('././home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
