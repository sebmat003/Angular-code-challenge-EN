import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "./components/loader/loader.component";

export const COMPONENTS = [LoaderComponent];
export const MODULES = [CommonModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS]
})
export class SharedModule {
}
