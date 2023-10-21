import { NgModule } from '@angular/core';
import { VehicleInfoFormComponent } from "./containers/vehicle-info-form/vehicle-info-form.component";
import { VehicleInfoRoutingModule } from "./vehicle-info-routing.module";
import { CommonModule } from "@angular/common";
import { VehicleTypeComponent } from './components/vehicle-type/vehicle-type.component';
import { VehicleSubtypeComponent } from './components/vehicle-subtype/vehicle-subtype.component';
import { VehicleLicensePlateComponent } from './components/vehicle-license-plate/vehicle-license-plate.component';
import { StoreModule } from "@ngrx/store";
import { featureKey, reducer } from "./store/reducers/vehicle-info.reducers";
import { EffectsModule } from "@ngrx/effects";
import { VehicleInfoEffects } from "./store/effects/vehicle-info.effects";
import { SharedModule } from "../shared/shared.module";
import { VehicleInfoHttpService } from "./store/services/vehicle-info-http.service";
import { ReactiveFormsModule } from "@angular/forms";
import { FormatLicencePlatePipe } from "./pipes/format-licence-plate.pipe";
import { NgxMaskModule } from "ngx-mask";

@NgModule({
  declarations: [VehicleInfoFormComponent, VehicleTypeComponent, VehicleSubtypeComponent, VehicleLicensePlateComponent, FormatLicencePlatePipe],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([VehicleInfoEffects]),
    VehicleInfoRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule
  ],
  providers: [VehicleInfoHttpService]
})
export class VehicleInfoModule {
}
