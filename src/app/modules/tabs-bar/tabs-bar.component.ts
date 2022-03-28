import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SubscriptionLike } from 'rxjs';
import { TabStateInterface } from '../../core/interfaces/tab-state.interface';
import { AppState } from '../../core/store';
import { setActiveTab } from '../../core/store/active-tab/active-tab.actions';
import { addTab, deleteTab } from '../../core/store/tabs/tabs.actions';

@Component({
  selector: 'app-tabs-bar',
  templateUrl: './tabs-bar.component.html',
  styleUrls: ['./tabs-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsBarComponent implements OnInit, OnDestroy {
  readonly tabsLimit = 4;

  tabs: TabStateInterface[] = [];
  activeTabId: number | null;

  private stateSub: SubscriptionLike;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.stateSub = this.store.subscribe((state) => {
      this.tabs = state.tabs;
      this.activeTabId = state.activeTabId;
    });
  }

  ngOnDestroy(): void {
    this.stateSub?.unsubscribe();
  }

  addTab(): void {
    this.store.dispatch(addTab());
  }

  setActiveTab(tabId: number): void {
    this.store.dispatch(setActiveTab({ tabId }));
  }

  deleteTab(tabId: number): void {
    this.store.dispatch(deleteTab({ tabId }));
  }
}
