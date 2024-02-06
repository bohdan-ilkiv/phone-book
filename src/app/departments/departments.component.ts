import { Component, OnInit } from '@angular/core';
import { PhonebookService } from '../phonebook.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments: any[] = []; // Initialize the property with an empty array

  constructor(private phonebookService: PhonebookService) { }

  ngOnInit(): void {
    this.phonebookService.getDepartments().subscribe(departments => {
      this.departments = departments;
    });
  }

  toggleEmployeeTable(department: any): void {
    department.showEmployees = !department.showEmployees;
  }
}
