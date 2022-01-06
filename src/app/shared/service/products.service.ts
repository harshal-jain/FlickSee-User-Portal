import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../classes/product';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  currency: string = "INR";
  constructor(private _httpService: HttpService, private _toastr: ToastrService) { }

  private allProducts(): Observable<Product[]> {
    return this._httpService.get(environment.BASE_API_PATH + "ProductMaster/GetProductList"); // iske subscribe nhi kraya hai toh yeh observable e return krega // jhs bhi isko use krenge voh isko subscribe krega
  }

  getProducts() {
    return this.allProducts();
  }
}
