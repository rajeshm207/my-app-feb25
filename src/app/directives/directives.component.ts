import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  isVisible:boolean=true;

  states:string[]=['Andhra Pradhesh','Karnataka','Kerala','Tamilnadu','Telangana'];


  products:any=[
    {name:'pen',price:10,rating:1.7},
    {name:'book',price:50,rating:3.5},
    {name:'shirt',price:510,rating:2.7},
    {name:'shoe',price:499,rating:3.0},
    {name:'bike',price:100000,rating:4.0},
    {name:'car',price:1200000,rating:5.0}
  ]
  newDate:any=new Date();

}
