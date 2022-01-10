import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/classes/product.interface';
import * as $ from 'jquery';

@Component({
  selector: 'app-product-tab',
  templateUrl: './product-tab.component.html',
  styleUrls: ['./product-tab.component.scss']
})
export class ProductTabComponent implements OnInit {
  @Input() products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    $("#tab-1").show();
    $(".tabs li a").on('click', function (e) {
      e.preventDefault(); // yeh default behaviour ko stop kr deta hai. // href call na ho // humne isliye band kra hai ki single page application hai toh application refresh nhi honi cheye
      $(this).parent().parent().find('li').removeClass('current');
      $(this).parent().addClass('current');

      let currentHref = $(this).attr('href'); // tab1 | tab 2

      $("#" + currentHref).show();

      //remove others
      $(this).parent().parent().parent().find(".tab-content").not("#" + currentHref).hide();
    });

  }

}
