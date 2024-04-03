import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectFirstUserName, selectToken, selectUserRole} from "./components/auth/state/auth.selectors";
import {tap} from "rxjs";
import adminActions from "./components/admin/state/admin.actions";
import authActions from "./components/auth/state/auth.actions";
import {StorageService} from "./services/storage.service";
import dashboardActions from "./components/dashboard/state/dashboard.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title: string = 'ITeamDevelopment'
  userRole;
  public token: string | null = '';
  public role: string | null = '';

  ngOnInit() {
    this.token = this.storageService.getToken();
    this.role = this.storageService.getRole();
    if (this.token) {
      this.store.dispatch(authActions.setToken({token: this.token}))
      this.store.dispatch(dashboardActions.getDashboard());
    }

    if (this.role) {
      this.store.dispatch(authActions.setRole({role: this.role}));
    }
  }

  constructor(public store: Store,
              private storageService: StorageService) {

    this.userRole = this.store.select(selectUserRole).pipe()
  }

  goToAdminPanel() {
    this.store.select(selectToken).subscribe((token => {
      this.store.dispatch(adminActions.loadUsers({token}))
      })
    )
  }

  logout() {
    this.store.dispatch(authActions.logoutUser());
    this.storageService.clear();
  }
}
