import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AutoLayoutComponent} from "./shared/auto-layout/auto-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  {path: '', component: AutoLayoutComponent, children: [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: HomePageComponent},
    {path: 'menu', loadChildren: () => import('./top-menu/top-menu.module').then(m => m.TopMenuModule)},
  ]},
  {path:'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: '**', redirectTo: '/'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
