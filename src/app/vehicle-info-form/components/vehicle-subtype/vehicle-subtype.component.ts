import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-vehicle-subtype',
  templateUrl: './vehicle-subtype.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleSubtypeComponent {
  @Input() vehicleSubtypes: string[] = [];
  @Input() vehicleSubtypeControl!: FormControl;

}
