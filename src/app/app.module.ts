import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Erorr404Component } from './erorr404/erorr404.component';
import { WelocmeComponent } from './welocme/welocme.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { MywebsiteComponent } from './mywebsite/mywebsite.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemperatureconverterComponent } from './temperatureconverter/temperatureconverter.component';
import { EmiComponent } from './emi/emi.component';
import { SimpleinterestrateComponent } from './simpleinterestrate/simpleinterestrate.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { AmazonComponent } from './amazon/amazon.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentidComponent } from './studentid/studentid.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentformComponent } from './studentform/studentform.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreatingStudentformComponent } from './creating-studentform/creating-studentform.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AppTextareaComponent } from './app-textarea/app-textarea.component';
import { CapitalDirective } from './capital.directive';
import { BalancePipe } from './balance.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    Erorr404Component,
    WelocmeComponent,
    DatabindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    MywebsiteComponent,
    HomeComponent,
    TemperatureconverterComponent,
    EmiComponent,
    SimpleinterestrateComponent,
    DirectivesComponent,
    EmployeesComponent,
    FlipkartComponent,
    VehicleComponent,
    AccountsComponent,
    AmazonComponent,
    PinterestComponent,
    CreateVehicleComponent,
    CreateAccountComponent,
    StudentidComponent,
    CreateUserComponent,
    StudentformComponent,
    VehicleDetailsComponent,
    CreatingStudentformComponent,
    Sibling1Component,
    Sibling2Component,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    StudentDetailsComponent,
    AppTextareaComponent,
    CapitalDirective,
    BalancePipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
