import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  term:string='';
  vehicles:any=[];
  constructor(private _vehicleService:VehicleService){
  this.loadVehicle();
  }
  loadVehicle(){
    this._vehicleService.getVehicles().subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }


  filter(){
    this._vehicleService.getFilteredVechicles(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }

  column:string='';
  order:string='';
  sort(){
    this._vehicleService.getSortedVechicles(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }

  delete(id:any){
    if(confirm("Are you sure to Delete?")==true){
      this._vehicleService.deleteVehicle(id).subscribe(
        (data:any)=>{
          alert("Record Deleted Successfully!");
          this.loadVehicle();
        },(err:any)=>{
          alert("Internal server Error!");
        }
      )

    }else{
      alert("You have cancelled")

    }
    
  }
  limit:string='';
  page:string='';
  pagination(){
    this._vehicleService.getPaginatedVechicles(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
}
