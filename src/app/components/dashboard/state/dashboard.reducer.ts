import {createReducer, on} from "@ngrx/store";
import {dashboardInitialState} from "./dashboard.state";
import dashboardActions from "./dashboard.actions";
import authActions from "../../auth/state/auth.actions";

export const dashboardReducer = createReducer(
  dashboardInitialState,
  on(dashboardActions.loadDashboardSuccess,(state, {dashboardInformation}) => {
    return {
      ...state,
      dashboard: [...dashboardInformation]
    }
  }),

  on(authActions.logoutUser, (state) => {
    return {
      ...dashboardInitialState
    }
  })
)
