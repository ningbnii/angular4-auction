import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms'
import { ProductService } from '../shared/product.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	formModel: FormGroup
	categories: string[]
  constructor(fb: FormBuilder, private productService: ProductService) {
  	this.formModel = fb.group({
  		title: ['',[Validators.minLength(3)]],
  		price: [null,[this.positiveNumberValidator]],
  		category: ['-1']
  	})
  }

  ngOnInit() {
  	this.categories = this.productService.getAllCategories()
  }
  // 定义只能输入正数的规则
  positiveNumberValidator(control: FormControl):any {
  	if(!control.value) {
  		return null
  	}
  	let myReg = /^[0-9]*[1-9][0-9]*$/
  	if(myReg.test(control.value)) {
  		return null
  	}
  	return {positiveNumber: true}
  }
  onSearch() {
  	if(this.formModel.valid) {
  		console.log(this.formModel.value)
  	}
  }
}
