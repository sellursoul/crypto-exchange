import {NgModule} from "@angular/core";
import {FormControlPipe} from "../pipes/form-control.pipe";
import {MatchPasswordDirective} from "../../auth/shared/services/password-validator.directive";
import {LineChartComponent} from "../elements/line-chart/line-chart.component";
import {NgChartsModule} from "ng2-charts";

@NgModule({
  exports: [
    FormControlPipe,
    MatchPasswordDirective,
    LineChartComponent
  ],
  declarations: [
    FormControlPipe,
    MatchPasswordDirective,
    LineChartComponent
  ],
  imports: [
    NgChartsModule
  ],
  providers: []
})
export class CoreModule {
}
