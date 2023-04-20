import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable} from "rxjs";
import {AuthResponseData} from "../../shared/interfaces/interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup
  hide: boolean = true
  isLoading: boolean = false
  error: string = ''

  constructor(
    private auth: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  togglePasswordVisibility(event: Event) {
    event.preventDefault()
    this.hide = !this.hide
  }

  getErrorMessage() {
    if (this.loginForm.get('email')?.hasError('required')) {
      return 'Please, enter email';
    }
    return this.loginForm.get('email')?.hasError('email') ? 'Please, enter correct email' : '';
  }

  getPasswordErrorMessage() {
    if (this.loginForm.get('password')?.hasError('required')) {
      return 'Please, enter password';
    }
    return this.loginForm.get('password')?.hasError('minlength') ? `Minimal password length 6 symbols` : '';
  }

  Login() {
    let login$: Observable<AuthResponseData>
    if (this.loginForm.invalid) {
      return
    }
    const email = this.loginForm.value.email
    const password = this.loginForm.value.password
    this.isLoading = true
    this.error = ''
    login$ = this.auth.login(email, password)

    login$.subscribe(resp => {
      console.log(resp)
      this.router.navigate(['/'])
      this.isLoading = false
    }, errorMessage => {
      this.error = errorMessage
      this._snackBar.open(this.error, 'Undo', {duration: 5000})
      this.isLoading = false
    })
  }
}
