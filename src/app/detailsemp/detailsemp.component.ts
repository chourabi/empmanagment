import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-detailsemp',
  templateUrl: './detailsemp.component.html',
  styleUrls: ['./detailsemp.component.css']
})
export class DetailsempComponent implements OnInit {

  id;
  employee:Employee = new Employee();

  payments:any = [];

  constructor( private route:ActivatedRoute, private emp:EmployeesService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getEmployeeById();
  }


  getEmployeeById(){
    this.emp.getEmployeeById(this.id).subscribe((data:Employee)=>{
      this.employee = data;
      this.getPayment();

    },(error)=>{
      alert("something went wrong")
    })
  }



  getPayment(){
    this.emp.getEmployeesPayment(this.id).subscribe((payment)=>{
      this.payments = payment;
    })
  }
}
