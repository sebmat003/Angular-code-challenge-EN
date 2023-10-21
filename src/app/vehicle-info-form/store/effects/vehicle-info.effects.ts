import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { VehicleInfoHttpService } from "../services/vehicle-info-http.service";
import * as VehicleInfoActions from '../actions/vehicle-info.actions';
import { catchError, exhaustMap, map, of } from "rxjs";
import { VehicleType } from "../../models/vehicle-info.models";

@Injectable()
export class VehicleInfoEffects {
  getVehicleTypes$ = createEffect(() => this.actions$.pipe(ofType(VehicleInfoActions.getVehicleTypes), exhaustMap(() =>
    this.vehicleInfoHttpService.getVehicleTypes().pipe(
      map(vehicleTypes => VehicleInfoActions.getVehicleTypesSuccess({vehicleTypes})),
      catchError((error: string) => of(VehicleInfoActions.getVehicleTypesFailure({error})))
    )
  )));

  getVehicleSubtypes$ = createEffect(() => this.actions$.pipe(ofType(VehicleInfoActions.getVehicleSubtypes), exhaustMap(({vehicleType}) =>
    this.vehicleInfoHttpService.getVehicleSubtypes(vehicleType.toUpperCase() as VehicleType).pipe(
      map(vehicleSubtypes => VehicleInfoActions.getVehicleSubtypesSuccess({vehicleSubtypes})),
      catchError((error: string) => of(VehicleInfoActions.getVehicleSubtypesFailure({error})))
    )
  )));

  constructor(private actions$: Actions, private vehicleInfoHttpService: VehicleInfoHttpService) {
  }
}
