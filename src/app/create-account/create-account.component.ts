import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  public accountForm:FormGroup =new FormGroup({
    account_name:new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    
    city:new FormControl(),
    ifsc_code:new FormControl(),
    id:new FormControl,
   

  })
  constructor(private _accountsServices:AccountsService,private _router:Router){}
  create(){
    console.log(this.accountForm.value);
    this._accountsServices.createAccount(this.accountForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("New Account Added Successfully");
        this._router.navigateByUrl("/dashboard/accounts");
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

}
