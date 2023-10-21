import { createFeatureSelector, createSelector } from "@ngrx/store";
import { featureKey, State } from "../reducers/vehicle-info.reducers";

export const selectFeatureState = createFeatureSelector<State>(featureKey);

export const selectVehicleTypes = createSelector(selectFeatureState, state => state.vehicleTypes);
export const selectVehicleSubtypes = createSelector(selectFeatureState, state => state.vehicleSubtypes);
export const selectLoading = createSelector(selectFeatureState, state => state.loading);
export const selectError = createSelector(selectFeatureState, state => state.error);
