import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  productForm: FormGroup;
  isLoading: boolean = false;
  products: any[] = [];
  product: any;

  constructor(private productService: ProductsService) { 
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      owner: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      expirationDate: new FormControl('', [Validators.required]),
      exportationDate: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
  });

  
  }
  cancelClicked: boolean = false;

  ngOnInit(): void {
    this.getAllProducts();
    setTimeout(() => {
      console.log(this.productForm);
    }, 3000);
  }



  getAllProducts () {
    this.productService.getAllProducts().subscribe((res: any) => {
      console.log(res);
      this.products = res?.data;
    } )
  }
  createProduct() {
    console.log(this.productForm.value);
   
    this.productService.createProduct(this.productForm.value).subscribe((res: any) => {
      console.log(res);
      this.getAllProducts();
    })
  }

  getProduct(id: string) {
    console.log(id);
    this.product = this.products.find((i) => i._id === id);
    this.product.action = (this.product.access === 'PENDING' ? 'grant': 
                            this.product.access === 'GRANTED' ? 'Deny': 
                            this.product.access === 'DENIED' ? 'Grant': '');

    this.product.API = (this.product.access === 'PENDING' ? 'GRANTED': 
    this.product.access === 'GRANTED' ? 'DENIED': 
    this.product.access === 'DENIED' ? 'GRANTED': '');
    console.log(this.product);

  }

  updateStatus(id: string) {
    console.log(this.productForm.value);
    this.productService.updateStatus(id, this.product.API).subscribe((res: any) => {
      console.log(res);
      this.getAllProducts();
    })
  }

  deleteProduct(id: string) {
    console.log(this.productForm.value);
    this.productService.delete(id).subscribe((res: any) => {
      console.log(res);
      this.getAllProducts();
    })
  }

}
