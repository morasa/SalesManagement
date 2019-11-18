import { Component, OnInit } from '@angular/core';
import * as PriceDetatils from '../../common/config/prices.json';
@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
  price_list = PriceDetatils['default'];
  constructor() { }

  ngOnInit() {
  }

}
