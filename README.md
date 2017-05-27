# Auction

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 组件（2017-05-27）
### 组件的必备元素
装饰器（@Component）、模版（template）、控制器（也就是写在装饰器下面的类）
### 组件可选的注入对象
输入属性（@Input）、提供器（providers，用来作依赖注入）、生命周期钩子（Lifecycle Hooks）
### 组件可选输出对象
生命周期钩子（Lifecycle Hooks）、样式表（styles，可以是多个）、动画（Animations）、输出属性（@Output）

## 添加第三方库
1. 使用npm下载库文件到项目依赖；
2. 修改.angular-cli.json文件里面的styles以及scripts属性值（使用jquery时需要安装它的类型检测库`@types/jquery`）；

## 一些零散的知识点
### 用图片占位符来代替图片
```
	<img src="http://placehold.it/320x150" alt="">
```
### 动态属性绑定
语法：
```HTML
	<img [src]="动态值" alt="">
```
动态添加class可以这样写：
```HTML
	<!-- 当布尔值为真的时候，active的class才会被添加，而且之前的container不会被覆盖 -->
	<div class="container" [class.active]="布尔值"></div>
```
### angular4中的循环
语法：
```HTML
	几个注意点：*、let不能丢；of（不是in）
	<span *ngFor="let item of items"></span>
```
### 父组件向子组件传参
父组件中：
```HTML
	<app-child [dataFromFater]="父组件中的值"></app-child>
```
子组件中：
```JS
	import { Component, Input } from '@angular/core';
	@Component({
		...
	})
	export class ChildComponent {
		/* 父组件传过来的值会自动覆盖子组件中的同名属性 */
		@Input()
		private dataFromFater: 值的类型 = 初始值;
	}
```
### 星级评价
1. 拿到评分数值，如果大于5，要做转换；
2. 生成含五个元素的布尔值类型的数组。true代表添加空星样式（默认都是实星样式）；
3. 用*ngFor动态生成5颗星。在循环内使用`[class.空星样式]="item"`

关键代码：
```JS
	let arr = [];
	for(let i = 1; i <= 5; i++) {
		arr.push(星级数 < i)
	}
```
