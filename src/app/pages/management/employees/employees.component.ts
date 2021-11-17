import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeForm: FormGroup;
  isLoading: boolean = false;

  constructor() { 
    this.employeeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
  });
  
  console.log(this.employeeForm);
  }
  cancelClicked: boolean = false;

  ngOnInit(): void {
  }

  deleteEmployee() {

  }

  createEmployee() {

  }
}
