import {createAction, props} from "@ngrx/store";
import {IUsersList} from "../../../../dtos/users-list";

const loadUsers = createAction('[Admin] Load Users Information', props<{token: string}>());
const loadUsersSuccess = createAction('[Admin] Load Users Information Success', props<{payload: IUsersList[]}>());
const getUsers = createAction('[Admin] Get Users');

const adminActions = {
  loadUsers,
  loadUsersSuccess,
  getUsers
};

export default adminActions;
