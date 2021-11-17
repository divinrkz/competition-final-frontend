import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeForm: FormGroup;
  isLoading: boolean = false;
  employees: any[] = [];
  employee: any;

  constructor(private employeeService: EmployeesService) { 
    this.employeeForm = new FormGroup({
      names: new FormControl('', [Validators.required, Validators.minLength(3)]),
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      nationalId: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      role: new FormControl('', [Validators.required]),
  });

  
  }
  cancelClicked: boolean = false;

  ngOnInit(): void {
    this.getAllEmployees();
    setTimeout(() => {
      console.log(this.employeeForm);
    }, 3000);
  }



  getAllEmployees () {
    this.employeeService.getAllEmployees().subscribe((res: any) => {
      console.log(res);
      this.employees = res?.data;
    } )
  }
  createEmployee() {
    console.log(this.employeeForm.value);
    this.employeeService.createEmployee(this.employeeForm.value).subscribe((res: any) => {
      console.log(res);
      this.getAllEmployees();
    })
  }

  getEmployee(id: string) {
    console.log(id);
    this.employee = this.employees.find((i) => i._id === id);
    this.employee.action = (this.employee.access === 'PENDING' ? 'grant': 
                            this.employee.access === 'GRANTED' ? 'Deny': 
                            this.employee.access === 'DENIED' ? 'Grant': '');

    this.employee.API = (this.employee.access === 'PENDING' ? 'GRANTED': 
    this.employee.access === 'GRANTED' ? 'DENIED': 
    this.employee.access === 'DENIED' ? 'GRANTED': '');
    console.log(this.employee);

  }

  updateAccess(id: string) {
    console.log(this.employeeForm.value);
    this.employeeService.updateAccess(id, this.employee.API).subscribe((res: any) => {
      console.log(res);
      this.getAllEmployees();
    })
  }

  deleteEmployee(id: string) {
    console.log(this.employeeForm.value);
    this.employeeService.delete(id).subscribe((res: any) => {
      console.log(res);
      this.getAllEmployees();
    })
  }

}
