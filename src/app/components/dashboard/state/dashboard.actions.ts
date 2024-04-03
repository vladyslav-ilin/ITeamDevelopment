import {createAction, props} from "@ngrx/store";
import {IDashboard} from "../../../../dtos/dashboard";


const loadDashboardSuccess = createAction('[Dashboard] Load Dashboard Information Success', props<{dashboardInformation: IDashboard[]}>())
const getDashboard = createAction('[Dashboard] Load Dashboard Information')

const dashboardActions = {
  loadDashboardSuccess,
  getDashboard
};

export default dashboardActions;


