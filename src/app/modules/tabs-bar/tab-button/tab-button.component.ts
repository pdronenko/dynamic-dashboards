import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  templateUrl: './tab-button.component.html',
  styleUrls: ['./tab-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabButtonComponent {
  @Input() @HostBinding('class.active') active = false;
  @Input() tabName = '';

  @Output() deleteTab = new EventEmitter<void>();
}
