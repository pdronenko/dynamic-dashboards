import { Options as SliderOptions } from '@angular-slider/ngx-slider';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  minValue: number = 10;
  maxValue: number = 90;
  options: SliderOptions = {
    floor: 0,
    ceil: 200,
    getPointerColor: () => '#3f51b5',
  };

  constructor() {}

  ngOnInit(): void {}
}
