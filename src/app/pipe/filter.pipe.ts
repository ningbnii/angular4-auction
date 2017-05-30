import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
	// 过滤商品列表，filterField是根据什么字段来过滤
  transform(list: any[], filterField:string, keyWord:string): any {
  	if(!filterField || !keyWord) {
  		return list
  	}
    return list.filter(item => {
    	let fiedlvalue = item[filterField]
    	return fiedlvalue.indexOf(keyWord) >= 0
    })
  }

}
