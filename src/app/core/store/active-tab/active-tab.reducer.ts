import { on } from '@ngrx/store';
import { createImmerReducer } from 'ngrx-immer/store';
import { setActiveTab } from './active-tab.actions';

export interface ActiveTabStateInterface {
  activeTabId: number | null;
}

export const activeTabReducer = createImmerReducer(
  1 as number | null,
  on(setActiveTab, (state, action) => {
    state = action.tabId;
    return state;
  })
);
