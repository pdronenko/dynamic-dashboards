import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { TabButtonComponent } from './tab-button/tab-button.component';
import { TabsBarComponent } from './tabs-bar.component';

@NgModule({
  declarations: [TabsBarComponent, TabButtonComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatRippleModule],
  exports: [TabsBarComponent],
})
export class TabsBarModule {}
