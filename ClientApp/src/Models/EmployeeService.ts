import { HttpErrorResponse,HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "src/Models/Employee";

@Injectable
  ({
    providedIn: 'root'
  })

export class EmployeeService {
  baseUrl = 'https://localhost:7167/api/Employ';
  subscribe(arg0: (data: any) => void) {
    throw new Error('Method not Implemented');
  }
  constructor(private http: HttpClient) { }
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('https://localhost:7167/api/Employ')
  }
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>('https://localhost:7167/api/Employ', employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }
}
