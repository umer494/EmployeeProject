import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';
import { Employee } from 'src/Models/Employee'
import { EmployeeService } from 'src/Models/EmployeeService';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'CreateList-employee',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css']
})
export class CreateEmployeeListComponent implements OnInit {
  @ViewChild('employeeForm')
  public createEmployeeForm!: NgForm;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private_router: Router,
    private_route: ActivatedRoute) { }
  ngOnInit() {

  }
  private getEmployee(id: number) { }

  saveEmployee(): void {
    alert("Message" + this.employee.employeeId)
    this.employeeService.addEmployee(this.employee).subscribe((data: Employee) => {
      console.log(data);
    },
      (error: any) => console.log(error)
    );
  }
}
