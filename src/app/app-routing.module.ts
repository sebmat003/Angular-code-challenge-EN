import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

const paths: Routes = [
  {
    path: 'vehicle-info-form',
    loadChildren: () => import('./vehicle-info-form/vehicle-info.module').then(m => m.VehicleInfoModule)
  },
  {
    path: '',
    redirectTo: 'vehicle-info-form',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(paths)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
