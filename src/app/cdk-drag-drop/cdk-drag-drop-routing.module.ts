import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdkDragDropComponent } from './cdk-drag-drop.component';

const routes: Routes = [
  {
    path: '',
    component: CdkDragDropComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdkDragDropRoutingModule {}
