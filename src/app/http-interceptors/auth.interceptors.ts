import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
//导入操作符捕获拦截器是否成功
import { tap } from 'rxjs/operators'
//导入路由服务
import { Router } from '@angular/router'

@Injectable()

export class AuthInterceptors implements HttpInterceptor{
    constructor(private router: Router){}
    //拦截使用HttpClient方法的请求
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>>{
        console.log('http拦截器')
        //如果是登录，不需要添加Authorization
        if (req.headers.get('No-Auth') === 'TRUE'){
            return next.handle(req)
        }
        //非登录请求，都要添加Authorization
        //先克隆一个请求头
        const token = localStorage.getItem('angular-token')
        const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        })
        return next.handle(authReq).pipe(
            tap(
                //成功回调
                ok => {},
                //失败回调
                error => {
                    // console.log('捕获到一个错误：',error)
                    if (error.status === 401) {
                        //需要先删除token(token过期的情况)
                        localStorage.removeItem('itcast-token')
                        //跳转到登录页面需要导入路由服务并依赖注入
                        this.router.navigate(['/login'])
                      }
                }
            )
        )
    }
}