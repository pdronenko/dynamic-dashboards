import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-bar',
  templateUrl: './tabs-bar.component.html',
  styleUrls: ['./tabs-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
