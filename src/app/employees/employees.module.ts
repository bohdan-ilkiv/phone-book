// employees.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { EmployeesComponent } from './employees.component';

@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    FormsModule // Add FormsModule here
  ],
  exports: [
    EmployeesComponent
  ]
})
export class EmployeesModule { }
