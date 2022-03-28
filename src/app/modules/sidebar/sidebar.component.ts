import { Options as SliderOptions } from '@angular-slider/ngx-slider';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, SubscriptionLike, tap } from 'rxjs';
import { AppState } from '../../core/store';
import { changeRange } from '../../core/store/tabs/tabs.actions';
import { selectActiveTab } from '../../core/store/tabs/tabs.selector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit, OnDestroy {
  private static defaultSliderOptions: SliderOptions = {
    floor: 1,
    getPointerColor: () => '#3f51b5',
    getSelectionBarColor: () => '#757575',
  };

  minValue: number = 1;
  maxValue: number = 10;
  options: SliderOptions;
  activeTabId: number | null;

  private stateSub: SubscriptionLike;

  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.stateSub = this.store
      .select(selectActiveTab)
      .pipe(
        tap((tab) => {
          this.activeTabId = !!tab?.chartData?.length ? tab.id : null;
          this.cd.markForCheck();
        }),
        filter((tab) => !!tab?.chartData?.length)
      )
      .subscribe((activeTab) => {
        this.minValue = activeTab!.range[0];
        this.maxValue = activeTab!.range[1];
        this.options = { ...SidebarComponent.defaultSliderOptions, ceil: activeTab!.chartData.length };
        this.cd.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.stateSub?.unsubscribe();
  }

  updateRange(): void {
    this.store.dispatch(
      changeRange({
        range: [this.minValue, this.maxValue],
        tabId: this.activeTabId!,
      })
    );
  }
}
