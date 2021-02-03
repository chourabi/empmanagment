import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor( private http:HttpClient ) { 

  }



  getListEmployee(){
    return this.http.get( environment.apiEndPOint+"employee/list" );
  }


  getEmployeeById(id){
    return this.http.get( environment.apiEndPOint+"employee/list/"+id );
    
  }
  addNewEmployee(data){
    return this.http.post( environment.apiEndPOint+"employee/add",data );
    
  }

  editEmployee(data,id){
    return this.http.post( environment.apiEndPOint+"employee/edit/"+id,data );
    
  }

  deleteEmployee(id){
    return this.http.get( environment.apiEndPOint+"employee/delete/"+id );
    
  }

  getEmployeesPayment(id){
    return this.http.get( environment.apiEndPOint+"payment/list/"+id );
  }


  
}
