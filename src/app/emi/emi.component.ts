import { Component } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {
  principal:number=0;
  interest:number=0;
  time:number=0;
  monthlyInterest:number=0;
  interestToAdd:number=0;
  emi(){
    console.log(this.principal,this.interest,this.time);
    this.interestToAdd=this.interest/100/12;
    this.monthlyInterest=(this.principal*this.interestToAdd*(1+this.interestToAdd)**this.time)/(((1+this.interestToAdd)**(this.time))-1);
    console.log(this.monthlyInterest);
  }

}
