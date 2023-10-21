import { createReducer, on } from '@ngrx/store';
import * as VehicleInfoActions from '../actions/vehicle-info.actions';
import { InitialState } from "@ngrx/store/src/models";
import { VehicleType } from "../../models/vehicle-info.models";

export const featureKey = 'vehicle-info';

export interface State {
  vehicleTypes: VehicleType[];
  vehicleSubtypes: string[];
  loading: boolean;
  error: string;
}

export const initialState: InitialState<State> = {
  vehicleTypes: [],
  vehicleSubtypes: [],
  loading: false,
  error: undefined
};

export const reducer = createReducer(
  initialState,
  on(VehicleInfoActions.getVehicleTypes, state => ({
    ...state,
    loading: true
  })),
  on(VehicleInfoActions.getVehicleTypesSuccess,
    VehicleInfoActions.getVehicleSubtypesSuccess,
    VehicleInfoActions.getVehicleTypesFailure,
    VehicleInfoActions.getVehicleSubtypesFailure,
    state => ({
      ...state,
      loading: initialState.loading
    })),
  on(VehicleInfoActions.getVehicleTypesSuccess, (state, {vehicleTypes}) => ({
    ...state,
    vehicleTypes
  })),
  on(VehicleInfoActions.getVehicleSubtypesSuccess, (state, {vehicleSubtypes}) => ({
    ...state,
    vehicleSubtypes
  })),
  on(VehicleInfoActions.getVehicleTypesFailure,
    VehicleInfoActions.getVehicleSubtypesFailure, (state, {error}) => ({
      ...state,
      error
    }))
);
