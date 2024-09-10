import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  catList:ICategory[];
  prdList:IProduct[];
  selectedCatID:number=0;
  orderTotalPrice:number=0;

  constructor()
  {
    this.catList = [
      {id: 1, name:"Laptop"},
      {id: 2, name:"Tablet"},
      {id: 3, name:"Mobile"},
    ];

    this.prdList= [
      {id:100, name:"Lenovo Thinkpad", price:100, quantity: 1, imgURL:"https://picsum.photos/200/150/" , categoryID: 1},
      {id:200, name:"Apple MacBook", price:200, quantity: 0, imgURL:"https://picsum.photos/200/150/" , categoryID: 1},
      {id:300, name:"Lenovo Tab 2", price:300, quantity: 10, imgURL:"https://picsum.photos/200/150/" , categoryID: 2},
      {id:400, name:"Samsung Tab", price:400, quantity: 2, imgURL:"https://picsum.photos/200/150/" , categoryID: 2},
      {id:500, name:"Samsung Note 10", price:500, quantity: 0, imgURL:"https://picsum.photos/200/150/" , categoryID: 2},
      {id:600, name:"Samsung Note 8", price:600, quantity: 5, imgURL:"https://picsum.photos/200/150/" , categoryID: 3},
    ];
  }

  ngOnInit(): void {
  }

  prdTrackByFn(index:number, prd:IProduct){
    return prd.id;
  }

  buy(prdPrice:number, count:string):void{
    // let itemsCount:number = count;
    let itemsCount: number;
    this.orderTotalPrice = parseInt(count) * prdPrice;
    // this.orderTotalPrice = Number(count) * prdPrice;
    // // itemsCount = count as number;
    // this.orderTotalPrice= +count *prdPrice;

  }

  changeCat(){
    this.selectedCatID=1;
  }

}
