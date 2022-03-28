import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs';
import { setActiveTab } from '../active-tab/active-tab.actions';
import { AppState } from '../index';
import { addTab, deleteTab } from './tabs.actions';

@Injectable()
export class TabsEffects {
  addTab$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addTab.type),
        withLatestFrom(this.store),
        tap(([, store]) => {
          if (!store.activeTabId) {
            this.store.dispatch(setActiveTab({ tabId: store.tabs[0].id }));
          }
        })
      ),
    { dispatch: false }
  );

  deleteTab$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteTab.type),
        withLatestFrom(this.store),
        tap(([{ tabId }, store]) => {
          if (tabId === store.activeTabId) {
            this.store.dispatch(setActiveTab({ tabId: store.tabs[0]?.id || null }));
          }
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}
