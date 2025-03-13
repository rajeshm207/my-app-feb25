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

const routes: Routes = [
  {path:'login' ,component:LoginComponent},
 
  {path:'dashboard' ,component:DashboardComponent,children:[
    {path:'welcome',component:WelocmeComponent},{ path:'databinding', component:DatabindingComponent},
    {path:'calculator',component:CalculatorComponent},{path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},{path:'bmi',component:BmiComponent},
    {path:'home',component:HomeComponent},{path:'temperatureconverter',component:TemperatureconverterComponent},
    {path:'emi',component:EmiComponent},{path:'simpleinterestrate',component:SimpleinterestrateComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employee',component:EmployeesComponent}
  ]},
  {path:'' ,component:LoginComponent},//default routing
  {path:'**',component:Erorr404Component} //wild-card routing
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
