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

  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
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
      const userId = resp.localId
      this.router.navigate(['/menu', 'watchlist', userId])
      this.isLoading = false
    }, errorMessage => {
      this.error = errorMessage
      this._snackBar.open(this.error, 'Undo', {duration: 5000})
      this.isLoading = false
    })
  }
}
