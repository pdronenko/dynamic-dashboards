import { on } from '@ngrx/store';
import { createImmerReducer } from 'ngrx-immer/store';
import { TabStateInterface } from '../../interfaces/tab-state.interface';
import { addChart, addTab, changeRange, deleteTab } from './tabs.actions';

export const tabsReducer = createImmerReducer(
  [] as TabStateInterface[],
  on(addTab, (state) => {
    state.push({
      id: 1, // todo get new id
      active: false, // todo get active if empty
      name: 'Tab 1', // todo add tab based on id
      hasChart: false,
      chartData: [],
      range: [],
    });
    return state;
  }),
  on(deleteTab, (state, action) => {
    const tabIndex = state.findIndex((tab) => tab.id === action.tabId);
    state.splice(tabIndex, 1);
    return state;
  }),
  on(addChart, (state, action) => {
    const tab = state.find((tab) => tab.id === action.tabId)!;
    tab.hasChart = true;
    tab.chartData = [84, 14, 234, 37, 64, 42, 197, 11]; // todo add as random values and random length
    tab.range = [0, 7]; // todo count normal range
    return state;
  }),
  on(changeRange, (state, action) => {
    const tab = state.find((tab) => tab.id === action.tabId)!;
    tab.range = action.range; // todo count normal range
    return state;
  })
);
