import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrls: ['./temperatureconverter.component.css']
})
export class TemperatureconverterComponent {
  num1:number=0;
  result:number=0;
  fahrenheit(){
    console.log(this.num1);
    this.result=(this.num1*1.8)+32
    console.log(this.result);
  }


}
