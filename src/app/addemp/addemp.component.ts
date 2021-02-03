import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  addEmp = new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    emailId : new FormControl('',Validators.required),
    
  })
  constructor(private emp:EmployeesService) { }

  ngOnInit(): void {
  }


  add(){
    this.emp.addNewEmployee(this.addEmp.value).subscribe((data)=>{
      console.log(data);
      
    })

    
  }

}
