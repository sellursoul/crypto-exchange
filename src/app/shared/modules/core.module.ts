import {NgModule} from "@angular/core";
import {FormControlPipe} from "../pipes/form-control.pipe";
import {MatchPasswordDirective} from "../../auth/shared/services/password-validator.directive";

@NgModule({
  exports: [
    FormControlPipe,
    MatchPasswordDirective
  ],
  declarations: [
    FormControlPipe,
    MatchPasswordDirective
  ],
  providers: []
})
export class CoreModule {
}
