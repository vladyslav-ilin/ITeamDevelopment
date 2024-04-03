import {createFeatureSelector, createSelector} from "@ngrx/store";
import {adminStateName, IAdminState} from "./admin.state";

const adminStateSelectors = createFeatureSelector<IAdminState>(adminStateName);

export const selectUsers = createSelector(
  adminStateSelectors,
  (res) => res.users
)
