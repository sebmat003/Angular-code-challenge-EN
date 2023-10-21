import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { VehicleTypeEnum } from "../../models/vehicle-info.enums";
import { VehicleType } from "../../models/vehicle-info.models";

// dummy data
const VEHICLE_TYPES: VehicleType[] = [
  VehicleTypeEnum.AUTO, VehicleTypeEnum.SCOOTER, VehicleTypeEnum.MOTOR
];

const VEHICLE_SUBTYPES: { [key in VehicleType]: string[] } = {
  AUTO: [
    'Hatchback',
    'Sedan',
    'Station',
    'Cabriolet',
    'Coupé',
    'Multi Purpose Vehicle (MVP)',
    'Terreinauto',
  ],
  MOTOR: [
    'All-road',
    'Naked',
    'Enduro',
    'Race',
    'Toermotor',
    'Chopper',
    'Zijspan'
  ],
  SCOOTER: []
}

@Injectable()
export class VehicleInfoHttpService {
  getVehicleTypes(): Observable<VehicleType[]> {
    return of(VEHICLE_TYPES).pipe(delay(1000));
  }

  getVehicleSubtypes(vehicleType: VehicleType): Observable<string[]> {
    return of(VEHICLE_SUBTYPES[vehicleType]).pipe(delay(200));
  }
}
