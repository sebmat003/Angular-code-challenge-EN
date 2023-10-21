import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { VehicleType } from "../../models/vehicle-info.models";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleTypeComponent {
  @Input() vehicleTypes: VehicleType[] = [];
  @Input() vehicleTypeControl!: FormControl;
  @Output() vehicleTypeChange$ = new EventEmitter<VehicleType>();

  changeType(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.vehicleTypeChange$.emit(value as VehicleType);
  }
}
