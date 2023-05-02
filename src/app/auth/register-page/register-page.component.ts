import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {MatchPasswordDirective} from "../shared/services/password-validator.directive";
import {Observable} from "rxjs";
import {AuthResponseData} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  isLoading: boolean = false
  registrationForm: FormGroup
  passHide: boolean = true
  repPassHide: boolean = true
  error: string = ''

  constructor(
    private auth: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private matchValidator: MatchPasswordDirective
  ) {
  }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      repeatpassword: new FormControl(null, [Validators.required]),
      agreement: new FormControl (false, [Validators.required])
    },
      {
        validators: this.matchValidator.validate.bind(this.matchValidator)
      })
  }

  togglePasswordVisibility(event: Event) {
    event.preventDefault()
    this.passHide = !this.passHide
  }
  toggleRepPasswordVisibility(event: Event) {
    event.preventDefault()
    this.repPassHide = !this.repPassHide
  }

  get email() {
    return this.registrationForm.get('email') as FormControl
  }

  get password() {
    return this.registrationForm.get('password') as FormControl
  }
  get repeatpassword() {
    return this.registrationForm.get('repeatpassword') as FormControl
  }

  getEmailErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'Please, enter email';
    }
    return this.email?.hasError('email') ? 'Please, enter correct email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password?.hasError('required')) {
      return 'Please, enter password';
    }
    return this.password?.hasError('minlength') ? `Minimal password length 6 symbols` : '';
  }
  getRepeatPasswordErrorMessage() {
    if (this.repeatpassword?.hasError('required')) {
      return 'Please, repeat password';
    }
    return this.repeatpassword?.hasError('matchPassword') ? 'Passwords don`t match' : '';
  }

  Register() {
    let register$: Observable<AuthResponseData>
    if (!this.registrationForm.valid) {
      return
    }
    const email = this.registrationForm.value.email
    const password = this.registrationForm.value.password
    this.isLoading = true
    this.error = ''
    register$ = this.auth.register(email, password)

    register$.subscribe( resp => {
      this.isLoading = false
      this.router.navigate(['/'])
    },
      errorMessage => {
        this.error = errorMessage
        this._snackBar.open(this.error, 'Undo', {duration: 5000})
        this.isLoading = false
      })
  }
}
