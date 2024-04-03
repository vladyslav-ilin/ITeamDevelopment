import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {Injectable} from "@angular/core";
import graphActions from "./graph.actions";
import {map, mergeMap, tap} from "rxjs";
import {DashboardService} from "../../../services/dashboard.service";

@Injectable()
export class GraphEffects {

  getGraphData$ = createEffect(() => this.actions$.pipe(
    ofType(graphActions.loadGraph),
    mergeMap(({id, token }) => this.dashboardService.getGraph(id, token)
      .pipe(
        map(graph => graphActions.loadGraphSuccess({payload: graph})),
        tap(graph => console.log(graph))
      )
    )
  ))


  constructor(private actions$: Actions,
              private store$: Store,
              private dashboardService: DashboardService) {
  }
}

