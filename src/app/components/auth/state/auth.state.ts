import {IAuthState} from "../../../../dtos/auth";

export const authStateName = 'auth';

export const authInitialState: IAuthState = {
  first_name: '',
  last_name: '',
  role: '',
  token: ''
}
