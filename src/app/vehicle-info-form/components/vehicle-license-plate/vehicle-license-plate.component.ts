import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-vehicle-license-plate',
  templateUrl: './vehicle-license-plate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleLicensePlateComponent {
  @Input() licencePlateControl!: FormControl;
}
