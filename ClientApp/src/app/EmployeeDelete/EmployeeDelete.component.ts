import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from 'src/Models/Employee';
import { EmployeeService } from "src/Models/EmployeeService";


@Component({
  selector: 'Delete-employeedlt',
  templateUrl: './EmployeeDelete.component.html',
  
})

export class DeleteEmployeeComponent implements OnInit {
  confirmDelete = false;
  public employees: Employee[] = [];
  employee: Employee = new Employee();
  errorMessage: String = "";


  constructor(private _route: ActivatedRoute,
    private _router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployeesFromServer();
  }

  async getEmployeesFromServer() {
    this.employeeService.getEmployees().subscribe((result) => (this.employees = result));
  }

  deleteEmployee(emp: Employee) {
    alert("Message" + emp.employeeId)
    this.employeeService.deleteEmployee(emp.employeeId).subscribe(
      () => console.log(`Employee with Id={$emp.employeeId} deleted`),
      (err) => console.log(err)
    );
  }
}
