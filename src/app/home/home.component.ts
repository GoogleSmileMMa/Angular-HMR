import { Component, OnInit } from '@angular/core';

//导入服务
import { HomeService } from './home.service'

//导入路由服务
import { Router } from '@angular/router'

//导入消息提示服务
import { NzMessageService } from 'ng-zorro-antd'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService, private router: Router, private nzMsgService: NzMessageService ) { }

    isCollapsed = false

    //退出
    logout() {
      // e.preventDefault()
      this.homeService.logout().subscribe(
        res =>{
          // console.log('success',res)
          //先清除本地的token
          localStorage.removeItem('angular-token')
          //再跳转到登录页
          this.router.navigate(['/login'])
        },
        err =>{
          console.log('error',err)
          this.nzMsgService.create('warning', `好像出错了，请稍后再试`)
        }
      )
    }
  

  ngOnInit() {
  }

}
