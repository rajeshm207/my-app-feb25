import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent {
  public studentForm:FormGroup=new FormGroup({
    name:new FormControl(),
    class:new FormControl(),
    fathername:new FormControl(),
    email:new FormControl(),
    dob:new FormControl(),
    address:new FormGroup({
      addressLine:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl(),

    }),
    marks: new FormArray([]),
    type:new FormControl(),
  })
  submit(){
    console.log(this.studentForm.value);
  }
  get marksFormArray(){
    return this.studentForm.get('marks') as FormArray;
  }
  addmarks(){
    this.marksFormArray.push(
      new FormGroup({
        class:new FormControl(),
        year:new FormControl(),
        percentage:new FormControl(),

      })
    )
  }
  deletemarks(i:number){
    this.marksFormArray.removeAt(i);

  }
  constructor(){
    this.studentForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayScholar'){
          this.studentForm.addControl('busFee',new FormControl());
          this.studentForm.removeControl('hostelFee');

        }else{
          this.studentForm.addControl('hostelFee',new FormControl());
          this.studentForm.removeControl('busFee');

        }
        
      }
    )
  }

}
