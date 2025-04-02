import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Erorr404Component } from './erorr404/erorr404.component';
import { WelocmeComponent } from './welocme/welocme.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { MywebsiteComponent } from './mywebsite/mywebsite.component';
import { HomeComponent } from './home/home.component';
import { TemperatureconverterComponent } from './temperatureconverter/temperatureconverter.component';
import { EmiComponent } from './emi/emi.component';
import { SimpleinterestrateComponent } from './simpleinterestrate/simpleinterestrate.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AmazonComponent } from './amazon/amazon.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentidComponent } from './studentid/studentid.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentformComponent } from './studentform/studentform.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreatingStudentformComponent } from './creating-studentform/creating-studentform.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { ParentComponent } from './parent/parent.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

const routes: Routes = [
  {path:'login' ,component:LoginComponent},
 
  {path:'dashboard' ,component:DashboardComponent,canActivate:[AuthenticationGuard],children:[
    {path:'welcome',component:WelocmeComponent},
    { path:'databinding', component:DatabindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'home',component:HomeComponent},
    {path:'temperatureconverter',component:TemperatureconverterComponent},
    {path:'emi',component:EmiComponent},
    {path:'simpleinterestrate',component:SimpleinterestrateComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employee',component:EmployeesComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'vehicle',component:VehicleComponent,canActivate:[AuthenticationGuard]},
    {path:'accounts',component:AccountsComponent},
    {path:'amazon',component:AmazonComponent},
    {path:'pinterest',component:PinterestComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'create-account',component:CreateAccountComponent},
    {path:'studentid',component:StudentidComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'studentform',component:StudentformComponent},
    {path:'create-studentform',component:CreatingStudentformComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
    {path:'sibling1',component:Sibling1Component},
    {path:'parent',component:ParentComponent},
    {path:'life-cycle-hooks',component:LifeCycleHooksComponent},
    
  ]},
  {path:'' ,component:LoginComponent},//default routing
  {path:'**',component:Erorr404Component} //wild-card routing
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
