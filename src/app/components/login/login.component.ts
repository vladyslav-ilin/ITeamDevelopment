import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {DashboardService} from "../../services/dashboard.service";
import {Store} from "@ngrx/store";
import authActions from "../auth/state/auth.actions";
import {IUser} from "../../../dtos/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public loginTitle: string = 'Enter your email and password';

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  })

  constructor(private authService: AuthService,
              private dashboardService: DashboardService,
              private store: Store<IUser>) {
  }

  ngOnInit() {}

  onSubmit(): void {
    this.store.dispatch(authActions.loadUser({payload: this.loginForm.value}))
  }

}
