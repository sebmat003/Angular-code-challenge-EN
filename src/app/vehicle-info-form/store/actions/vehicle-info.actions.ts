import { createAction, props } from "@ngrx/store";
import { VehicleType } from "../../models/vehicle-info.models";

export const VehicleInfoActions = {
  GET_VEHICLE_TYPES: '[Vehicle info] Get vehicle types',
  GET_VEHICLE_TYPES_SUCCESS: '[Vehicle info] Success to get vehicle types',
  GET_VEHICLE_TYPES_FAILURE: '[Vehicle info] Failure to get vehicle types',

  GET_VEHICLE_SUBTYPES: '[Vehicle info] Get vehicle subtypes',
  GET_VEHICLE_SUBTYPES_SUCCESS: '[Vehicle info] Success to get vehicle subtypes',
  GET_VEHICLE_SUBTYPES_FAILURE: '[Vehicle info] Failure to get vehicle subtypes',
}

export const getVehicleTypes = createAction(VehicleInfoActions.GET_VEHICLE_TYPES);
export const getVehicleTypesSuccess = createAction(VehicleInfoActions.GET_VEHICLE_TYPES_SUCCESS, props<{
  vehicleTypes: VehicleType[]
}>());
export const getVehicleTypesFailure = createAction(VehicleInfoActions.GET_VEHICLE_TYPES_FAILURE, props<{
  error: string
}>());

export const getVehicleSubtypes = createAction(VehicleInfoActions.GET_VEHICLE_SUBTYPES, props<{
  vehicleType: VehicleType
}>());
export const getVehicleSubtypesSuccess = createAction(VehicleInfoActions.GET_VEHICLE_SUBTYPES_SUCCESS, props<{
  vehicleSubtypes: string[]
}>());
export const getVehicleSubtypesFailure = createAction(VehicleInfoActions.GET_VEHICLE_SUBTYPES_FAILURE, props<{
  error: string
}>());
