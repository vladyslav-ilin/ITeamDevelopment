import {createReducer, on} from "@ngrx/store";
import {authInitialState} from "./auth.state";
import authActions from "./auth.actions";

export const authReducer = createReducer(
  authInitialState,
  on(authActions.loadUserSuccess, (state, {payload}) => {
    return {
      ...payload,
    }
  }),

  on(authActions.setToken, (state, {token}) => {
    return {
      ...state,
      token: token
    }
}),

  on(authActions.setRole, (state, {role}) => {
    return {
      ...state,
      role: role
    }
  }),

  on(authActions.logoutUser, (state) => {
    return {
      ...authInitialState
    }
  })
)
