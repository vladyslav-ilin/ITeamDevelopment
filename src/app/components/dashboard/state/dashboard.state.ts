import {IDashboard} from "../../../../dtos/dashboard";

export const dashboardStateName = 'dashboard';

export interface IDashboardState {
  dashboard: IDashboard[]
}

export const dashboardInitialState: IDashboardState = {
  dashboard: [{
    id: null,
    name: '',
    users_resolved: '',
    active: false,
    image_url: ''
  }]
}
