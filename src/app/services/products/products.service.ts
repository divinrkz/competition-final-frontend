import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
  constructor(private httpClient: HttpClient) { }

  getAllProducts() {
    return this.httpClient.get(environment.API_URL + '/products');
  }

  createProduct(data: any) {
    return this.httpClient.post(environment.API_URL + '/products', data);
  }

  
  updateProduct(id: string, data: any) {
    return this.httpClient.put(environment.API_URL + `/products/${id}`, data);
  }

  
  updateStatus(id: string, access: string) {
    return this.httpClient.put(environment.API_URL + `/products/${id}/access/${access}`, {});
  }

  delete(id: string) {
    return this.httpClient.delete(environment.API_URL + `/products/${id}`);
  }
}
