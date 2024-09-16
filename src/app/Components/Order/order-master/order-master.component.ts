import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit {

  catList:ICategory[];
  selectedCatID:number=0;
  receivedOrderTotalPrice:number=0;
  constructor()
  {
    this.catList = [
      {id: 1, name:"Laptop"},
      {id: 2, name:"Tablet"},
      {id: 3, name:"Mobile"},
    ];
  }

  ngOnInit(): void {
  }

  onTotalPriceChanged(totalPrice:number)
  {
    this.receivedOrderTotalPrice = totalPrice;
  }

}
