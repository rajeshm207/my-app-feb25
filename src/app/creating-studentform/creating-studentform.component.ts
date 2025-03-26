import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentidService } from '../studentid.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-creating-studentform',
  templateUrl: './creating-studentform.component.html',
  styleUrls: ['./creating-studentform.component.css']
})
export class CreatingStudentformComponent {
  public studentForm:FormGroup=new FormGroup({
    name:new FormControl(),
    phone:new FormControl(),
    city:new FormControl(),
    dob:new FormControl(),
    email:new FormControl(),
    school_pin:new FormControl(),

  })
  id:number=0;
  constructor(private _studentidService:StudentidService,private _router:Router, private _activatedroute:ActivatedRoute){
    _activatedroute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
    if(this.id){
      _studentidService.getstudentid().subscribe(
        (data:any)=>{
          console.log(data);
          this.studentForm.patchValue(data);
          console.log(data);
        
      },(err:any)=>{
        alert("Internal Server Error")
        }
      )
    }
  }


  create(){
    if(this.id){
      console.log(this.studentForm.value);
      this._studentidService.updatestudentid( this.id,this.studentForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert("Student Record Updated Successfully!");
          this._router.navigateByUrl("/dashboard/student id");
        },(err:any)=>{
          alert("Internal Server Error");
        }
      )
      

    }else{

      console.log(this.studentForm.value);
      this._studentidService.createstudentid(this.studentForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert("New Record Created Successfully!");
          this._router.navigateByUrl("/dashboard/studentid");
        },(err:any)=>{
          alert("Internal Server Error");
        }
      )
    }

  }
}
