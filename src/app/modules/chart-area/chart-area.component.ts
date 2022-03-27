import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-chart-area',
  templateUrl: './chart-area.component.html',
  styleUrls: ['./chart-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartAreaComponent implements OnInit {
  results = [
    {
      name: 'Germany',
      value: 40632,
      extra: {
        code: 'de',
      },
    },
    {
      name: 'United States',
      value: 50000,
      extra: {
        code: 'us',
      },
    },
    {
      name: 'France',
      value: 36745,
      extra: {
        code: 'fr',
      },
    },
    {
      name: 'United Kingdom',
      value: 36240,
      extra: {
        code: 'uk',
      },
    },
    {
      name: 'Spain',
      value: 33000,
      extra: {
        code: 'es',
      },
    },
    {
      name: 'Italy',
      value: 35800,
      extra: {
        code: 'it',
      },
    },
  ];

  colorScheme: Color = {
    name: 'Name',
    selectable: false,
    // @ts-ignore
    group: 'linear',
    domain: ['black', 'green', 'yellow', 'red'],
  };

  constructor() {}

  ngOnInit(): void {}
}
