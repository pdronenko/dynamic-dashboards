import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Color } from '@swimlane/ngx-charts';
import { SubscriptionLike } from 'rxjs';
import { AppState } from '../../core/store';
import { addChart } from '../../core/store/tabs/tabs.actions';
import { selectActiveTab } from '../../core/store/tabs/tabs.selector';

@Component({
  selector: 'app-chart-area',
  templateUrl: './chart-area.component.html',
  styleUrls: ['./chart-area.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartAreaComponent implements OnInit, OnDestroy {
  chartResults: { name: string; value: number }[] = [];
  activeTabId: number | null;

  colorScheme: Color = {
    name: 'Name',
    selectable: false,
    // @ts-ignore
    group: 'linear',
    domain: ['black', 'green', 'yellow', 'red'],
  };

  private stateSub: SubscriptionLike;

  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.stateSub = this.store.select(selectActiveTab).subscribe((activeTab) => {
      this.activeTabId = activeTab?.id || null;
      this.chartResults = (activeTab?.chartData || []).map((entry) => ({ name: 'random', value: entry })); // todo
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.stateSub?.unsubscribe();
  }

  addChart(): void {
    this.store.dispatch(addChart({ tabId: this.activeTabId! }));
  }
}
