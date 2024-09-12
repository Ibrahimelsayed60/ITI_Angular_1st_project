import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // catList:ICategory[];
  prdList:IProduct[];
  prdListOfCat:IProduct[] =[];
  selectedCatID:number=0;
  orderTotalPrice:number=0;
  orderDate:Date;
  constructor()
  {


    this.prdList= [
      {id:100, name:"Lenovo Thinkpad", price:1000000, quantity: 1, imgURL:"https://picsum.photos/200/150/" , categoryID: 1},
      {id:200, name:"Apple MacBook", price:200778, quantity: 0, imgURL:"https://picsum.photos/200/150/" , categoryID: 1},
      {id:300, name:"Lenovo Tab 2", price:3000, quantity: 10, imgURL:"https://picsum.photos/200/150/" , categoryID: 2},
      {id:400, name:"Samsung Tab", price:400, quantity: 2, imgURL:"https://picsum.photos/200/150/" , categoryID: 2},
      {id:500, name:"Samsung Note 10", price:500, quantity: 0, imgURL:"https://picsum.photos/200/150/" , categoryID: 2},
      {id:600, name:"Samsung Note 8", price:600, quantity: 5, imgURL:"https://picsum.photos/200/150/" , categoryID: 3},
    ];
    this.orderDate = new Date();
    this.prdListOfCat = this.prdList;
  }

  ngOnInit(): void {
  }

  prdTrackByFn(index:number, prd:IProduct){
    return prd.id;
  }

  filterProductsByCatID(){
    this.prdListOfCat = this.prdList.filter(prd=>prd.categoryID==this.selectedCatID);
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
