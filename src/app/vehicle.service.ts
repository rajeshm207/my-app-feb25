import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClient:HttpClient) { }
  baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";
  getVehicles():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }

  getVehicle(id:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id)
  }

  getFilteredVechicles(term:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term);
  }
  getSortedVechicles(column:any,order:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }
  deleteVehicle(id:any):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id);
  }

  getPaginatedVechicles(limit:any,page:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit="+limit+"&page="+page);
  }
  createVehicle(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl,data);
  }
  updateVehicle(id:any,data:any):Observable<any>{
    return this._httpClient.put(this.baseUrl+"/"+id,data);
  }
}
