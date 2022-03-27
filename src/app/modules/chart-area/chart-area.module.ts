import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChartAreaComponent } from './chart-area.component';

@NgModule({
  declarations: [ChartAreaComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [ChartAreaComponent],
})
export class ChartAreaModule {}
