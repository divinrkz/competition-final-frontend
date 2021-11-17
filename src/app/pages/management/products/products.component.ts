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
      this.products = [];
      for (const product of res?.data) {
        product.exportDate = new Date(product.exportationDate).toDateString();
        product.expireDate = new Date(product.expirationDate).toDateString();
        this.products.push(product);
      }
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
    this.product.action = (this.product.status === 'APPROVED_FOR_EXPORTATION' ? 'Reject for exportation': 
                            this.product.status === 'REJECTED_FOR_EXPORTATION' ? 'Approve for exportation': 
                            this.product.status === 'PENDING' ? 'Approve for exportation': '');

    this.product.API = (this.product.status === 'PENDING' ? 'APPROVED_FOR_EXPORTATION': 
    this.product.access === 'APPROVED_FOR_EXPORTATION' ? 'REJECTED_FOR_EXPORTATION': 
    this.product.access === 'REJECTED_FOR_EXPORTATION' ? 'APPROVED_FOR_EXPORTATION': '');
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
