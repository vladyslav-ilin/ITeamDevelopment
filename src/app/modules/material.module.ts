import {NgModule, Type} from "@angular/core";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";

const MATERIAL: Type<any>[] = [
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
]

@NgModule({
  imports: [
    ...MATERIAL
  ],
  exports: [
    ...MATERIAL
  ]
})
export class MeterialModule { }
