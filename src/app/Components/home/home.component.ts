import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/viewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  storeInfo:StoreData;
  isImageShown:boolean=true;
  constructor()
  {
    this.storeInfo = new StoreData("ITI Store", "https://picsum.photos/400/200",["Cairo", "Alex","Qena"]);
  }

  ngOnInit(): void {
  }

  toggleImage(){
    this.isImageShown = ! this.isImageShown;
  }

}
