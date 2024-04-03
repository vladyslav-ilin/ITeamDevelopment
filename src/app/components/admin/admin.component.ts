import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectUsers} from "./state/admin.selector";
import {MatTableDataSource} from "@angular/material/table";
import {map, tap} from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  public users;
  public columns: string[] = [
    'name',
    'lastName',
    'dateOfBirth',
    'education',
    'role',
    'position'
  ];
  constructor(private store: Store<any>) {
    this.users = this.store.select(selectUsers).pipe(
    );
  }

}
