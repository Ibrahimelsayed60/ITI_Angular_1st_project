import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit, AfterViewInit {

  catList:ICategory[];
  selectedCatID:number=0;
  receivedOrderTotalPrice:number=0;

  // clientNameInpElem:ElementRef = new ElementRef();
  // clientNameInpElem:ElementRef = {} as ElementRef;
  // clientNameInpElem?:ElementRef; // optional
  // clientNameInpElem:ElementRef | undefined = undefined;
  // clientNameInpElem:ElementRef | null = null;
  @ViewChild('clientNameInp') clientNameInpElem!:ElementRef; // Non-null asseration operator
  @ViewChild(ProductListComponent) prdListCompObj!: ProductListComponent;
  constructor()
  {
    this.catList = [
      {id: 1, name:"Laptop"},
      {id: 2, name:"Tablet"},
      {id: 3, name:"Mobile"},
    ];
  }
  ngAfterViewInit(): void {
    this.clientNameInpElem.nativeElement.value = "Your name here";
    this.clientNameInpElem.nativeElement.style.border = "2px solid red";

    console.log(this.prdListCompObj.prdList);

  }

  ngOnInit(): void {
  }

  onTotalPriceChanged(totalPrice:number)
  {
    this.receivedOrderTotalPrice = totalPrice;
  }

  completeOrder()
  {
    this.prdListCompObj.prdList[0].quantity -= 1;
  }

}
