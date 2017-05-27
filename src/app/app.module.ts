import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [ // 这个元数据里只能声明组件、指令和管道
    AppComponent, NavbarComponent, FooterComponent, SearchComponent, CarouselComponent, ProductComponent, StarsComponent
  ],
  imports: [ // 声明当前模块依赖的其他模块，引入了这些模块，你就可以使用这些模块提供的组件、指令和服务
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [], // 声明模块中提供了哪些服务
  bootstrap: [AppComponent] // 声明模块的主组件是谁
})
export class AppModule { }
