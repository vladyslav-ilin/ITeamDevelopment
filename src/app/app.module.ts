import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ROUTES} from './app-routes';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {RouterModule} from "@angular/router";
import {MeterialModule} from "./modules/material.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import {authReducer} from "./components/auth/state/auth.reducer";
import {authStateName} from "./components/auth/state/auth.state";
import { EffectsModule } from '@ngrx/effects';
import {AuthEffects} from "./components/auth/state/auth.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {RouterEffects} from "./state/router-state/router.effects";
import {dashboardReducer} from "./components/dashboard/state/dashboard.reducer";
import {dashboardStateName} from "./components/dashboard/state/dashboard.state";
import {CommonModule} from "@angular/common";
import {graphReducer} from "./components/graph/state/graph.reducer";
import {GraphEffects} from "./components/graph/state/graph.effects";
import {graphStateName} from "./components/graph/state/graph.state";
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CardsComponent } from './components/cards/cards.component';
import { ModalComponent } from './components/modal/modal.component';
import { AdminComponent } from './components/admin/admin.component';
import {AdminEffects} from "./components/admin/state/admin.effects";
import {adminStateName} from "./components/admin/state/admin.state";
import {adminReducer} from "./components/admin/state/admin.reducer";

@NgModule({
  imports: [
    MeterialModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(authStateName, authReducer),
    StoreModule.forFeature(dashboardStateName, dashboardReducer),
    StoreModule.forFeature(graphStateName, graphReducer),
    StoreModule.forFeature(adminStateName, adminReducer),
    EffectsModule.forRoot([AuthEffects, RouterEffects, GraphEffects, AdminEffects]),
    StoreDevtoolsModule.instrument(),
    CommonModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    WelcomeComponent,
    CardsComponent,
    ModalComponent,
    AdminComponent,
  ],
  providers: [
    provideAnimationsAsync(),
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
