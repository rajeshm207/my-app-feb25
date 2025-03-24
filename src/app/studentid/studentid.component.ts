import { Component } from '@angular/core';
import { StudentidService } from '../studentid.service';

@Component({
  selector: 'app-studentid',
  templateUrl: './studentid.component.html',
  styleUrls: ['./studentid.component.css']
})
export class StudentidComponent {
  studentid:any;
  term:string='';
  constructor(private _studentidService:StudentidService){
    this.loadstudentid();
  }
  loadstudentid(){
    this._studentidService.getstudentid().subscribe(
      (data:any)=>{
        console.log(data);
        this.studentid=data
        
      
      },(err:any)=>{
        alert("Iternal Server Error")
      }
    )
    
  }
  filter(){
    this._studentidService.getfilteredstudentid(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.studentid=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

}
