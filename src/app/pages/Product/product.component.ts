import { Component, OnInit, NgModule } from '@angular/core';
import { Product } from '../../model/product'
import { ProductEntityService } from '../../api/productEntity.service'
import { CollectionModelProduct } from 'src/app/model/collectionModelProduct';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  
})


export class ProductComponent implements OnInit {

   public Cproducts : CollectionModelProduct;
   public products : Array<Product> = [];

  constructor(private productEntityService : ProductEntityService ) { }

  ngOnInit(): void {
      
  this.getAll();


  }
public getAll() {
  console.log('getting all ..');
this.productEntityService.findAllProductUsingGET().subscribe(
  res => {
    console.log('getting all 1 ..');
    this.Cproducts = res;
    this.products = this.Cproducts["_embedded"]["products"];
    console.log(this.products); 
    
  },
  err => {
    console.log(err);
  },
  () => {

  }
  )
}
}
