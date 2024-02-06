// employees.component.ts

import { Component } from '@angular/core';
import { Employee } from '../../models/employee.model'; 
import { PhonebookService } from '../phonebook.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchTerm: string = '';

  constructor(private phonebookService: PhonebookService) {
    this.phonebookService.getEmployees().subscribe(
      (data: Employee[]) => {
        this.employees = data;
        this.filteredEmployees = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  filterEmployees() {
    if (this.searchTerm.trim() === '') {
      this.filteredEmployees = this.employees;
    } else {
      this.filteredEmployees = this.employees.filter(employee =>
        employee.fullName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
