import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css']
})
export class ListempComponent implements OnInit {

  employees : Employee[];

  constructor(private emp:EmployeesService) { }

  ngOnInit(): void {
    this.getEmployees();
  }



  getEmployees(){
    this.emp.getListEmployee().subscribe( (data:Employee[])=>{
      this.employees = data;

      console.log(this.employees);
      
      
    },(error)=>{

    })
  }


  deleteEMP(id){
    if ( confirm('do you really wanna delete this employee ?') ) {
      this.emp.deleteEmployee(id).subscribe((data)=>{
        console.log(data);

        this.getEmployees();
        
      })
    }
  }

}
