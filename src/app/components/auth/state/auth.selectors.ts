import {createFeatureSelector, createSelector} from "@ngrx/store";
import {authStateName} from "./auth.state";
import {IAuthState} from "../../../../dtos/auth";

const authStateSelectors = createFeatureSelector<IAuthState>(authStateName);
export const selectFirstUserName = createSelector(
  authStateSelectors,
  (res) => res.first_name
)

export const selectUserRole = createSelector(
  authStateSelectors,
  (res) => res.role
)

export const selectToken = createSelector(
  authStateSelectors,
  (res) => res.token
)

