import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdkDragDropComponent } from './cdk-drag-drop.component';
import { DragInColumnComponent } from './drag-in-column/drag-in-column.component';
import { DragInRowComponent } from './drag-in-row/drag-in-row.component';

const routes: Routes = [
  {
    path: '',
    component: CdkDragDropComponent,
    pathMatch: 'full',
  },
  {
    path: 'row-drag',
    component: DragInRowComponent,
    pathMatch: 'full',
  },
  {
    path: 'column-drag',
    component: DragInColumnComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdkDragDropRoutingModule {}
