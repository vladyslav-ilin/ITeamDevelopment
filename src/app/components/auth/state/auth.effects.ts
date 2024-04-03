import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import authActions from "./auth.actions";
import {catchError, EMPTY, mergeMap, of, switchMap, throwError, withLatestFrom} from "rxjs";
import {Store} from "@ngrx/store";
import {AuthService} from "../../../services/auth.service";
import {navigateToDashboard} from "../../../state/router-state/router.actions";
import dashboardActions from "../../dashboard/state/dashboard.actions";
import {DashboardService} from "../../../services/dashboard.service";
import {StorageService} from "../../../services/storage.service";
import {selectToken, selectUserRole} from "./auth.selectors";

@Injectable()
export class AuthEffects {
  sendFormData$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.loadUser),
    mergeMap(({ payload }) => this.authService.onSubmittedUser(payload)
      .pipe(
        mergeMap((res) => {
          this.storageService.setToken(res.token);
          this.storageService.setRole(res.role);
          return [authActions.loadUserSuccess({payload: res}),
            dashboardActions.getDashboard()]}
      ),
        catchError((err) => {
          alert('Error: ' + err.error.error);
          return EMPTY;
        }))
  )));

  getDashboardAction$ = createEffect(() => this.actions$.pipe(
    ofType(dashboardActions.getDashboard),
    withLatestFrom(this.store$.select(selectToken), this.store$.select(selectUserRole)),
    mergeMap(([action, token, role]) => {
      return this.dashboardService.getDashboard(token)
        .pipe(
          switchMap((dashboard) => [
            dashboardActions.loadDashboardSuccess({ dashboardInformation: dashboard }),
            navigateToDashboard()
          ])
        )
    })
  ))



  constructor(private actions$: Actions,
              private store$: Store,
              private authService: AuthService,
              private storageService: StorageService,
              private dashboardService: DashboardService) {
  }

}
