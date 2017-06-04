import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
	@Input() // 这样整一下，父组件传过来的同名属性自然就同步过来了
	private rating: number = 0;
	private stars: boolean[];
  // 控制星星组件是否只读
  @Input()
  private readonly: boolean = true;
  // 把新的评分给父组件
  @Output()
  // 只有在输出输的变量后面加Change才能直接用双向绑定，否则要另写方法
  private ratingChange: EventEmitter<number> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  	
  }
  clickStar(index: number) { // 传进来的下标是从0开始的
    if(!this.readonly) {
      this.rating = index+1;
      this.ngOnInit() // ngOnInit还可以这样调，学着点儿
    }
    this.ratingChange.emit(this.rating)
  }
  // 这个接口用来解决父组件中的评分已经改变，但是传到子组件中没有变化的问题
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for(let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating? true: false) // 其实这里的三元可以不写，直接写条件
    }
  }
}
