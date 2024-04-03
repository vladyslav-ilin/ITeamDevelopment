import {createReducer, on} from "@ngrx/store";
import {adminInitialState} from "./admin.state";
import adminActions from "./admin.actions";
import authActions from "../../auth/state/auth.actions";

export const adminReducer = createReducer(
  adminInitialState,
  on(adminActions.loadUsersSuccess, (state, { payload }) => {
    return {
      ...state,
      users: [...payload]
    }
  }),

  on(authActions.logoutUser, (state) => {
    return {
      ...adminInitialState
    }
  })
)
