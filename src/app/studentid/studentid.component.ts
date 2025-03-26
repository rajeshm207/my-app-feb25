import { Component } from '@angular/core';
import { StudentidService } from '../studentid.service';
import { FormControl, FormGroup } from '@angular/forms';

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

  delete(id:any){
    if(confirm("Are you sure to Delete?")==true){
      this._studentidService.deletestudentid(id).subscribe(
        (data:any)=>{
          alert("Record Deleted Successfully!");
          this.loadstudentid();
        },(err:any)=>{
          alert("Internal server Error!");
        }
      )

    }else{
      alert("You have cancelled")

    }


  }

  }
