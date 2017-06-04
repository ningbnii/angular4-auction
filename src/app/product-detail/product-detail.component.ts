import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService,Product,Comment } from '../shared/product.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
	product: Product
	comments: Comment[]
  newRating: number = 5
  newComment: string = ''
  isCommentHidden: boolean = true
  constructor(
  	private routeInfo: ActivatedRoute,
  	private productService: ProductService
  ) { }

  ngOnInit() {
  	let productId: number = this.routeInfo.snapshot.params["productId"]
  	this.product = this.productService.getProuduct(productId)
  	this.comments = this.productService.getCommentsForProductId(productId)
  }
  addComment() {
    let comment = new Comment(0,this.product.id,new Date().toISOString(),'小水',this.newRating,this.newComment)
    this.comments.unshift(comment)
    this.newComment = null
    this.newRating = 5
    this.isCommentHidden = true
    // 第一次调那个匿名函数时，传进去的是0。返回的值会作为下一次的sum传进去
    let sum = this.comments.reduce((sum,comment) => sum + comment.rating,0)
    this.product.rating = sum / this.comments.length
  }
}
