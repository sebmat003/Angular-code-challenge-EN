import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { getVehicleSubtypes, getVehicleTypes } from "../../store/actions/vehicle-info.actions";
import { selectLoading, selectVehicleSubtypes, selectVehicleTypes } from "../../store/selectors/vehicle-info.selectors";
import { VehicleType } from "../../models/vehicle-info.models";
import { Observable, tap } from "rxjs";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LicencePlateValidator } from "../../validators/licence-plate.validator";

@Component({
  selector: 'app-vehicle-info-form',
  templateUrl: './vehicle-info-form.component.html',
  styleUrls: ['./vehicle-info-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleInfoFormComponent implements OnInit {
  vehicleTypes$!: Observable<VehicleType[]>
  vehicleSubtypes$!: Observable<string[]>
  loading$!: Observable<boolean>;
  form = new FormGroup({
    vehicleType: new FormControl(null, [Validators.required]),
    vehicleSubType: new FormControl(null),
    licencePlate: new FormControl(null, { validators: [Validators.required, LicencePlateValidator], updateOn: 'blur'})
  });

  constructor(private store: Store) {
  }

  get vehicleTypeControl(): FormControl {
    return this.form.get('vehicleType') as FormControl;
  }

  get vehicleSubTypeControl(): FormControl {
    return this.form.get('vehicleSubType') as FormControl;
  }

  get licencePlateControl(): FormControl {
    return this.form.get('licencePlate') as FormControl;
  }

  ngOnInit(): void {
    this.vehicleTypes$ = this.store.select(selectVehicleTypes).pipe(tap(types => {
      const defaultType = types[0];
      this.vehicleTypeControl.setValue(types[0]);
      this.onVehicleTypeChange(defaultType);
    }));
    this.vehicleSubtypes$ = this.store.select(selectVehicleSubtypes).pipe(tap(subTypes => {
      if (!subTypes.length) {
        this.vehicleSubTypeControl.setValue(null);
      }
    }));
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(getVehicleTypes());
  }

  onVehicleTypeChange(vehicleType: VehicleType): void {
    this.store.dispatch(getVehicleSubtypes({vehicleType}));
  }
}
