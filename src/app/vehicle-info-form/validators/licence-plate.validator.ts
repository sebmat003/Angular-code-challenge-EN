import { AbstractControl } from "@angular/forms";
import { KentekenCheck } from 'rdw-kenteken-check';

export function LicencePlateValidator(control: AbstractControl){
  const plateChecker = new KentekenCheck(control.value);

  return plateChecker.matchLicense(control.value) ? null : { 'outdated': 'Helaas is het ingevoerde kenteken niet geldig. Probeer het opnieuw.' };
}
