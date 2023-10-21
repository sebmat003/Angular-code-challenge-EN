import {Pipe, PipeTransform} from '@angular/core';
import { KentekenCheck } from 'rdw-kenteken-check';

@Pipe({name: 'formatLicencePlate'})
export class FormatLicencePlatePipe implements PipeTransform {
  transform(value: string) {
    return new KentekenCheck(value).formatLicense();
  }
}
