import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {LoadingSpinnerComponent} from "../shared/loading-spinner/loading-spinner.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";

const routes: Routes = [
  {path: '', children: [
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  }]

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [RouterModule],
  providers: []
})
export class AuthModule {
}
