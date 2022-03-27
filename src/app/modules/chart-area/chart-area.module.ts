import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartAreaComponent } from './chart-area.component';

@NgModule({
  declarations: [ChartAreaComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, NgxChartsModule],
  exports: [ChartAreaComponent],
})
export class ChartAreaModule {}
