// department.model.ts
import { Employee } from './employee.model';

export interface Department {
   name: string;
   employees: Employee[];
}
