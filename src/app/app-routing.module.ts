import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router' // <router-ouelet>是由RouterModule提供
import { CommonModule } from '@angular/common' // *ngfor *ngif 指令

import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'

//导入守卫服务
import { AuthGuard } from './auth.guard'

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    //路由守卫
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule], // 导出才能使用，否则会出现 Template parse errors:'router-outlet' is not a known element
  declarations: []
})
export class AppRoutingModule { }
