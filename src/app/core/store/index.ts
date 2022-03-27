import { ActionReducerMap } from '@ngrx/store';
import { TabStateInterface } from '../interfaces/tab-state.interface';
import { activeTabReducer } from './active-tab/active-tab.reducer';
import { tabsReducer } from './tabs/tabs.reducer';

export interface AppState {
  activeTabId: number | null;
  tabs: TabStateInterface[];
}

export const reducers: ActionReducerMap<AppState, any> = {
  activeTabId: activeTabReducer,
  tabs: tabsReducer,
};
