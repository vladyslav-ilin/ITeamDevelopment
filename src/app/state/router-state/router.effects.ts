import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {navigateToAdminPanel, navigateToDashboard, navigateToDashboardSuccess} from "./router.actions";
import {mergeMap, tap} from "rxjs";

@Injectable()

export class RouterEffects {
  navigateToDashboard$ = createEffect(() => this.actions$.pipe(
    ofType(navigateToDashboard),
    mergeMap((ect) => {
          this.router.navigateByUrl('/dashboard');
        return [navigateToDashboardSuccess()]
      }
    )
  ));

  navigateToAdminPanel$ = createEffect(() => this.actions$.pipe(
    ofType(navigateToAdminPanel),
    mergeMap((ect) => {
        this.router.navigateByUrl('/admin');
        return [navigateToDashboardSuccess()]
      }
    )
  ));

  constructor(private actions$: Actions,
              private router: Router) {}
}
