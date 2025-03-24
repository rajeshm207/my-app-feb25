import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  accounts:any=[];
  term:string='';
  constructor(private _accountsService:AccountsService){
   this.loadaccount();
  }
  loadaccount(){
   this._accountsService.getAccount().subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  filter(){
    this._accountsService.getFilteredAccount(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )

  }
  column:string='';
  order:string='';
  sort(){
    this._accountsService.getSortedAccount(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  delete(id:any){
    if(confirm("Are you sure to delete")==true){
      this._accountsService.deleteAccount(id).subscribe(
        (data:any)=>{
          alert("Record Deleted Successfully!");
          this. loadaccount();


        },(err:any)=>{
          alert("Internal Server Error")
        }

      )

    }else{
      alert("you have cancelled")
    }

  }
  limit:string='';
  page:string='';
  pagination(){
    this._accountsService.getPaginatedAccount(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )

  }

}
