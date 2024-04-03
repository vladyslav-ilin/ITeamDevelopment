import {Component} from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";
import {map, Observable, shareReplay, tap} from "rxjs";
import {Store} from "@ngrx/store";
import {dashSelector} from "./state/dashboard.selectors";
import {selectToken} from "../auth/state/auth.selectors";
import graphActions from "../graph/state/graph.actions";
import {IDashboard} from "../../../dtos/dashboard";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  public dashboardList;
  public modalVisible: boolean = false;
  public graphTitle: string = 'Report';

  constructor(private dashboardService: DashboardService,
              private store: Store<IDashboard>) {
    this.dashboardList = this.store.select(dashSelector).pipe(
      tap(item => console.log(item))
    )
  }

  getGraphInfo(id: number | null): void {
    this.store.select(selectToken).pipe(
      map(token => {
        return { id, token };
      })
    ).subscribe(({ id, token }) => {
      this.store.dispatch(graphActions.loadGraph({ id, token }));
      this.modalVisible = true;
    })
  }

}
