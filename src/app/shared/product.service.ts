import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
 	private products: Product[] = [
		new Product(1,"第1个商品",1.99,3.5,"这是一个商品的描述1",["电子产品","通讯设备"]),
		new Product(2,"第2个商品",1.58,4.5,"这是一个商品的描述2",["图书","通讯设备"]),
		new Product(3,"第3个商品",1.52,2.5,"这是一个商品的描述3",["图书","通讯设备"]),
		new Product(4,"第4个商品",1.45,1,"这是一个商品的描述4",["电子产品","通讯设备"]),
		new Product(5,"第5个商品",1.6,2.5,"这是一个商品的描述5",["电子产品","通讯设备"]),
		new Product(6,"第6个商品",1.85,4,"这是一个商品的描述6",["电子产品","通讯设备"]),
	]
	private comments: Comment[] = [
		new Comment(1,1,"2017-05-28 14:14:14","巴金",3,"为你写诗"),
		new Comment(2,1,"2017-04-28 18:18:14","阿球",3,"为你放屁"),
		new Comment(3,1,"2017-03-28 14:16:00","小巴金",3,"为你金金"),
		new Comment(4,4,"2017-01-28 14:14:55","小骚球",3,"为你写诗")
	]
  constructor() { }
  getAllCategories(): string[] {
  	return ['电子产品','通讯设备','图书']
  }
  // 得到商品列表
	getProuducts(): Product[] {
		return this.products
	}
	// 得到单个商品信息
	getProuduct(id: number): Product {
		return this.products.find((product) => product.id == id)
	}
	// filter匿名函数的参数的数组的每一项，执行内容是过滤的条件
	getCommentsForProductId(id: number): Comment[] { 
		return this.comments.filter((comment: Comment) => comment.productId == id)
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

export class Comment {
	constructor(
		public id: number,
		public productId: number,
		public timestamp: string,
		public user: string,
		public rating: number,
		public content: string
	) {}
}
