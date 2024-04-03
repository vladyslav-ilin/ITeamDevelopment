import {createFeatureSelector, createSelector} from "@ngrx/store";
import {dashboardStateName, IDashboardState} from "./dashboard.state";

const dashStateSelectors = createFeatureSelector<IDashboardState>(dashboardStateName);

export const dashSelector = createSelector(
  dashStateSelectors,
  (res) => res.dashboard
)
