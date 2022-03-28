import { AppState } from '../index';

export const selectActiveTab = (state: AppState) => state.tabs.find((tab) => tab.id === state.activeTabId) || null;
