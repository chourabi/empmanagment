import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {

  id;
  employee:Employee = new Employee();

  addEmp = new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    emailId : new FormControl('',Validators.required),
    
  })
  constructor( private route:ActivatedRoute, private emp:EmployeesService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getEmployeeById();
  }


  getEmployeeById(){
    this.emp.getEmployeeById(this.id).subscribe((data:Employee)=>{
      this.employee = data;

      this.addEmp.setValue({
        firstName: this.employee.firstName,
        lastName: this.employee.lastName,
        emailId: this.employee.emailId,
        
      })

    },(error)=>{
      alert("something went wrong")
    })
  }



  edit(){
    this.emp.editEmployee(this.addEmp.value,this.id).subscribe((data:any)=>{
      console.log(data);

      if (data.success) {
        alert(data.message);
      }else{
        alert(data.message);
      }
      
    })
  }
}
