import { createAction, props } from '@ngrx/store';

export const addTab = createAction('[Tabs] Add tab');
export const deleteTab = createAction('[Tabs] Delete tab', props<{ tabId: number }>());
export const addChart = createAction('[Tabs] Add chart to tab', props<{ tabId: number }>());
export const changeRange = createAction('[Tabs] Change chart range', props<{ tabId: number; range: [number, number] }>());
