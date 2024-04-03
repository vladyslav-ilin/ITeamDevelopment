import {IUsersList} from "../../../../dtos/users-list";

export const adminStateName = 'admin';

export interface IAdminState {
  users: IUsersList[];
}

export const adminInitialState: IAdminState = {
  users: []
}
