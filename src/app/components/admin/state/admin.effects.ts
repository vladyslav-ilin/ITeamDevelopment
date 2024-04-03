import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {AuthService} from "../../../services/auth.service";
import adminActions from "./admin.actions";
import {mergeMap, switchMap} from "rxjs";
import {navigateToAdminPanel} from "../../../state/router-state/router.actions";
import {Injectable} from "@angular/core";

@Injectable()
export class AdminEffects {
  getUsersList$ = createEffect(() => this.actions$.pipe(
    ofType(adminActions.loadUsers),
    mergeMap(({token}) => this.authService.getUsers(token)
      .pipe(
        switchMap((users) => [
          adminActions.loadUsersSuccess({payload: users}),
          navigateToAdminPanel()
        ])
      )
    )))

  constructor(private actions$: Actions,
              private store$: Store,
              private authService: AuthService) {
  }
}
