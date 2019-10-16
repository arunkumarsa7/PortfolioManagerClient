import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ServicesModule } from 'src/app/modules/service/services.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [

    CommonModule,
    ServicesModule
  ]
})
export class HomeModule { }
