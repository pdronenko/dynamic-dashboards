import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsBarComponent } from './tabs-bar.component';

@NgModule({
  declarations: [TabsBarComponent],
  imports: [CommonModule],
  exports: [TabsBarComponent],
})
export class TabsBarModule {}
