import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';

const antdModuleList = [
  // antd module
  NzSpinModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, antdModuleList],
  exports: [antdModuleList],
})
export class AntdModule {}
