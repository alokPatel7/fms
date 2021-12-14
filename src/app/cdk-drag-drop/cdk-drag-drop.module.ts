import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkDragDropRoutingModule } from './cdk-drag-drop-routing.module';
import { DragInColumnComponent } from './drag-in-column/drag-in-column.component';
import { DragInRowComponent } from './drag-in-row/drag-in-row.component';


@NgModule({
  declarations: [DragInColumnComponent, DragInRowComponent],
  imports: [
    CommonModule,
    CdkDragDropRoutingModule
  ]
})
export class CdkDragDropModule { }
