import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SubscriptionLike } from 'rxjs';
import { AppState } from '../../core/store';
import { addChart } from '../../core/store/tabs/tabs.actions';
import { selectActiveTab } from '../../core/store/tabs/tabs.selector';

@Component({
  selector: 'app-chart-area',
  templateUrl: './chart-area.component.html',
  styleUrls: ['./chart-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartAreaComponent implements OnInit, OnDestroy {
  private static readonly activeColor = '#3f51b5';
  private static readonly inactiveColor = '#757575';
  readonly yAxisLabel = 'Case count';
  chartData: { value: number; name: string }[] = [];
  customColors: { value: string; name: string }[] = [];
  activeTabId: number | null;

  private stateSub: SubscriptionLike;

  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef) {}

  private static getBarColor(barPosition: number, rangeMin: number, rangeMax: number): string {
    return barPosition >= rangeMin && barPosition <= rangeMax ? ChartAreaComponent.activeColor : ChartAreaComponent.inactiveColor;
  }

  ngOnInit(): void {
    this.stateSub = this.store.select(selectActiveTab).subscribe((activeTab) => {
      if (!activeTab) {
        this.chartData = [];
        this.cd.markForCheck();
        return;
      }
      this.activeTabId = activeTab.id || null;
      this.chartData = activeTab.chartData || [];
      const [rangeMin, rangeMax] = activeTab.range;
      this.customColors = this.chartData.map(({ name }, i) => ({
        value: ChartAreaComponent.getBarColor(i + 1, rangeMin, rangeMax),
        name,
      }));
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
