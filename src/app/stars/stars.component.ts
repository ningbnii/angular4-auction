import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
	@Input() // 这样整一下，父组件传过来的同名属性自然就同步过来了
	private rating: number = 0;
	private stars: boolean[];
  constructor() { }

  ngOnInit() {
  	this.stars = [];
  	for(let i = 1; i <= 5; i++) {
  		this.stars.push(i > this.rating? true: false) // 其实这里的三元可以不写，直接写条件
  	}
  }

}
