import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { VehicleInfoFormComponent } from "./containers/vehicle-info-form/vehicle-info-form.component";
import { CommonModule } from "@angular/common";

const paths: Routes = [
  {
    path: 'form',
    component: VehicleInfoFormComponent
  },
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(paths)
  ],
  exports: [RouterModule]
})
export class VehicleInfoRoutingModule { }
