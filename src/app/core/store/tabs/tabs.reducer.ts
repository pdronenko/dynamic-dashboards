import { on } from '@ngrx/store';
import { createImmerReducer } from 'ngrx-immer/store';
import { generateRandomNum } from '../../helpers/random-num-generator';
import { TabStateInterface } from '../../interfaces/tab-state.interface';
import { addChart, addTab, changeRange, deleteTab } from './tabs.actions';

export const tabsReducer = createImmerReducer(
  [] as TabStateInterface[],
  on(addTab, (state) => {
    const newId = (state[state.length - 1]?.id || 0) + 1;
    state.push({
      id: newId,
      name: `Tab ${newId}`,
      chartData: [],
      range: [], // todo range to object with min max?
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
    const randomChartData = [...Array(generateRandomNum(8, 15))].map(() => generateRandomNum(100, 1000));
    tab.chartData = randomChartData;
    // length
    tab.range = [0, randomChartData.length - 1];
    return state;
  }),
  on(changeRange, (state, action) => {
    const tab = state.find((tab) => tab.id === action.tabId)!;
    tab.range = action.range;
    return state;
  })
);
