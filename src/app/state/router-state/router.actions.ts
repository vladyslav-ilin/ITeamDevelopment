import {createAction} from "@ngrx/store";

export const navigateToDashboard = createAction('[Router] Navigate to Dashboard');
export const navigateToDashboardSuccess = createAction('[Router] Navigate to Dashboard Success');

export const navigateToAdminPanel = createAction('[Router] Navigate to Admin Panel');
export const navigateToAdminPanelSuccess = createAction('[Router] Navigate to Admin Panel Success');
