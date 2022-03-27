import { Options as SliderOptions } from '@angular-slider/ngx-slider';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  minValue: number = 1;
  maxValue: number = 10;
  options: SliderOptions = {
    floor: 1,
    ceil: 10,
    getPointerColor: () => '#3f51b5',
  };

  constructor() {}

  ngOnInit(): void {}

  log() {
    console.log(this.minValue, this.maxValue);
  }
}
