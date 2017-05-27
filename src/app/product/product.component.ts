import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	private products: Array<Product>;
  private imgSrc = "http://placehold.it/320x150";
  constructor() { }

  ngOnInit() {
  	this.products = [
  		new Product(1,"第1个商品",1.99,3.5,"这是一个商品的描述1",["电子产品1","通讯设备1"]),
  		new Product(2,"第2个商品",1.58,4.5,"这是一个商品的描述2",["电子产品2","通讯设备2"]),
  		new Product(3,"第3个商品",1.52,2.5,"这是一个商品的描述3",["电子产品3","通讯设备3"]),
  		new Product(4,"第4个商品",1.45,1,"这是一个商品的描述4",["电子产品4","通讯设备4"]),
  		new Product(5,"第5个商品",1.6,2.5,"这是一个商品的描述5",["电子产品5","通讯设备5"]),
  		new Product(6,"第6个商品",1.85,4,"这是一个商品的描述6",["电子产品6","通讯设备6"]),
  	]
  }

}

export class Product { // 这个类是用来描述一个商品的信息的
	constructor(
		public id: number,
		public title: string,
		public price: number,
		public rating: number,
		public desc: string,
		public categories: Array<string>
	) {

	}
}
