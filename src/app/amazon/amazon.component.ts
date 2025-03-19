import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {
  amazon:any=[];
  constructor(private _amazonService:AmazonService){
    _amazonService.getamazon().subscribe(
      (data:any)=>{
        console.log(data);
        this.amazon=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

}
