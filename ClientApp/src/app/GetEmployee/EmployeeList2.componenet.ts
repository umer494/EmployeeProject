import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Inject } from '@angular/core';
import { IEmployee } from 'src/Models/IEmployee';



@Component
  ({
    selector: 'list-employlist2',
    templateUrl: './EmployeeList2.component.html',
    

  })
export class EmployeeList2Component {
  public excans: IEmployee[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    baseUrl = 'https://localhost:7167/';
    http.get<IEmployee[]>(baseUrl + 'api/Employ').subscribe(result => {
      this.excans = result;
    }, error => console.error(error));
  }

}
