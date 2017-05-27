import { Component } from '@angular/core';

/* @Component为装饰器，装饰器里面的选项为元数据 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/* 这个ts类，视频作者称之为控制器 */
export class AppComponent {
  title = 'app works!';
}
