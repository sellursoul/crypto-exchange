import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../shared/interfaces/environment";
import {AuthResponseData} from "../../../shared/interfaces/interfaces";
import {BehaviorSubject, catchError, Observable, tap, throwError} from "rxjs";
import {UserModel} from "../../../shared/interfaces/user.model";
import {Router} from "@angular/router";
import {ErrorMessages} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userSub$ = new BehaviorSubject<UserModel>(null!)
  timeoutInterval: number

  constructor(private http: HttpClient, private router: Router) {
  }

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.ApiKey}`,
      {email, password, returnSecureToken: true}).pipe(
      catchError(this.getErrorHandler), tap(this.handleUser.bind(this))
    )
  }

  register(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.ApiKey}`, {
      email, password, returnSecureToken: true
    }).pipe(
      catchError(this.getErrorHandler), tap(this.handleUser.bind(this))
    )
  }

  logout() {
    this.userSub$.next(null!)
    this.router.navigate(['/'])
    localStorage.removeItem('userData')
    if (this.timeoutInterval) {
      clearTimeout(this.timeoutInterval)
    }
  }

  handleUser(response: AuthResponseData) {
    const expireDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
    const user = new UserModel(
      response.email,
      response.localId,
      response.idToken,
      expireDate)
    this.userSub$.next(user)
    localStorage.setItem('userData', JSON.stringify(user))
    this.autoLogout(+response.expiresIn * 1000)
  }

  autoLogin() {
    let userData: { email: string, localId: string, _token: string, expirationDate: string } = JSON.parse(localStorage.getItem('userData')!)
    if (!userData) {
      return;
    }
    let user = new UserModel(
      userData.email,
      userData.localId,
      userData._token,
      new Date(userData.expirationDate)
    )
    if (user.token) {
      this.userSub$.next(user)
    }
    let todayDate = new Date().getTime()
    let expirationDate = new Date(userData.expirationDate).getDate()

    this.autoLogout(expirationDate - todayDate)
  }

  autoLogout(expirationDate: number) {
    this.timeoutInterval = setTimeout(() => {
      this.logout()
    }, expirationDate)
  }


  getErrorHandler(errorResp: HttpErrorResponse) {
    const errorMessages: ErrorMessages = {
      EMAIL_NOT_FOUND: 'Email or password is invalid.',
      INVALID_PASSWORD: 'Email or password is invalid.',
      USER_DISABLED: 'The user account has been disabled by an administrator.',
      EMAIL_EXISTS: 'The email address is already in use by another account.',
      OPERATION_NOT_ALLOWED: 'Password sign-in is disabled for this project.',
      TOO_MANY_ATTEMPTS_TRY_LATER: 'We have blocked all requests from this device due to unusual activity. Try again later.'
    }
    const errorMessage = errorMessages[errorResp.error?.error?.message] || 'An occurred error';
    return throwError(errorMessage)
  }

}
