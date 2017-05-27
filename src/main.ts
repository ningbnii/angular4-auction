// 这里是导入一些必要的库，让angular在老版本浏览器中能运行（官方是没有引入的）
import './polyfills.ts'; 

// 用来关闭angular的开发者模式
import { enableProdMode } from '@angular/core';
// 告诉angular使用哪个模块来启动整个应用
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// 导入环境配置（angular支持多环境）
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
