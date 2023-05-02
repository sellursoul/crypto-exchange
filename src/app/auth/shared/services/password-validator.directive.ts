import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {Directive, Input} from "@angular/core";

@Directive({
  selector: '[matchPassword]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting: MatchPasswordDirective,
      multi: true
    }
  ]
})

export class MatchPasswordDirective implements Validator {
  @Input('matchPassword') matchControlName: string;

  validate(control: AbstractControl): ValidationErrors | null {
    const controlToValidate = control.parent?.get(this.matchControlName)
    if (controlToValidate && controlToValidate.value !== control.value) {
      return {matchPassword: true}
    }
    return null
  }
}
