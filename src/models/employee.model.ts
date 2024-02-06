// Define the Employee interface
export interface Employee {
   fullName: string;
   jobPosition: string;
   phoneNumber: string;
}

// Define the Department interface
export interface Department {
   name: string;
   employees: Employee[];
}
