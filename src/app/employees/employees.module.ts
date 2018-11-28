import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//虽然根模块app.moudle.ts导入的有，但是模块之间是不能共享指令组件的，所以这里用到了相关的指令，必须再导入一下
//导入antd 模块
import { NgZorroAntdModule } from 'ng-zorro-antd'
//导入响应式模块
import { ReactiveFormsModule } from '@angular/forms'

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

@NgModule({
  declarations: [EmployeeListComponent, EmployeeAddComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
