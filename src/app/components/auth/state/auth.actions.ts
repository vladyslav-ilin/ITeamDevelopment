import {createAction, props} from "@ngrx/store";
import {IUser} from "../../../../dtos/user";
import {IAuthState} from "../../../../dtos/auth";

const prefix = '[User]';

const loadUser = createAction(`${prefix} Load User Information`, props<{payload: IUser}>());
const loadUserSuccess = createAction(`${prefix} Load User Information Success`, props<{payload: IAuthState}>());
const setToken = createAction(`${prefix} Set Token`, props<{token: string}>());
const setRole = createAction(`${prefix} Set Role`, props<{role: string}>());

const logoutUser = createAction(`${prefix} logout User Information`);
const authActions = {
  loadUser,
  loadUserSuccess,
  logoutUser,
  setToken,
  setRole,
};

export default authActions;
