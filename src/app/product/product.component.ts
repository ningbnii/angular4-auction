import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService,Product } from '../shared/product.service'
import 'rxjs/Rx'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	private products: Product[]
	private keyWord: string // 这个属性用来保存输入框中的关键字
	private titleFilter: FormControl = new FormControl()
  private imgSrc = "http://placehold.it/320x150"
  constructor(private productService: ProductService) {
  	this.titleFilter.valueChanges
  		// 这里需要要引入rxjs
  		.debounceTime(500) 
  		.subscribe(
  			value => this.keyWord = value
  		)
  }

  ngOnInit() {
  	this.products = this.productService.getProuducts()
  }

}

