import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }

  getAllEmployees() {
    return this.httpClient.get(environment.API_URL + '/employees');
  }

  createEmployee(data: any) {
    return this.httpClient.post(environment.API_URL + '/employees', data);
  }

  
  updateEmployee(id: string, data: any) {
    return this.httpClient.put(environment.API_URL + `/employees/${id}`, data);
  }

  
  updateAccess(id: string, access: string) {
    return this.httpClient.put(environment.API_URL + `/employees/${id}/access/${access}`, {});
  }

  delete(id: string) {
    return this.httpClient.delete(environment.API_URL + `/employees/${id}`);
  }
}
