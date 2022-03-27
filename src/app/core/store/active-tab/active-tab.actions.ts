import { createAction, props } from '@ngrx/store';

export const setActiveTab = createAction('[Active Tab] Set active tab id', props<{ activeTabId: number }>());
