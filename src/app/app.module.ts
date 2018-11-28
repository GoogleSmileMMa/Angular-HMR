import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd'
import { registerLocaleData } from '@angular/common'
import zh from '@angular/common/locales/zh'


import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'

//导入http拦截器
import { AuthInterceptors } from './http-interceptors/auth.interceptors'

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ReactiveFormsModule 
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    {
      //将自己写的拦截器添加到HTTP_INTERCEPTORS数组中，
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptors,
      multi: true //表示当前拦截器可能有多项
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
