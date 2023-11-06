import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Router, RouterModule } from '@angular/router';
import { MenuPage } from '../menu/menu.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: HomePage },
      { path: 'menu', component: MenuPage },
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
