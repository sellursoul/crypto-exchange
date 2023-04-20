import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {exhaustMap, Observable, take} from "rxjs";

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.auth.userSub$.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req)
        }
        let modifiedReq = req.clone({
          params: req.params.set('auth', user.token!),
        });
        return next.handle(modifiedReq)
      })
    )
  }
}
