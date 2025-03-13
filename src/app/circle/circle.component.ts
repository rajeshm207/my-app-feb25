import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  num1:number=0;
  result:number=0;
  area(){
    console.log(this.num1);
    this.result=(22/7)*(this.num1*this.num1)
    console.log(this.result);
  }
  perimeter(){
    console.log(this.num1);
    this.result=(22/7)*(this.num1)*2
    console.log(this.result);

  }

}
