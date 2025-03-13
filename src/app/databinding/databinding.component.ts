import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  //event binding
  click(){
    alert("Hellooooo");
  }
  submit(){
    alert(this.mobile)
  }
  

  //Interpolation

  age:number=45;
  name:string='Mahesh';

  //property binding
  isData:boolean=true;

  //two way binding
  mobile:string='+91';

  //Calculator
  num1:number=0;
  num2:number=0;
  result:number=0;
  add(){
    console.log(this.num1,this.num2);
    this.result=this.num1+this.num2;
    console.log(this.result); 
  }

}
