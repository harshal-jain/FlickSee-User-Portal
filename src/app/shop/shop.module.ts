import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './home/logo/logo.component';
import { CollectionBannerComponent } from './home/collection-banner/collection-banner.component';
import { ParallaxBannerComponent } from './home/parallax-banner/parallax-banner.component';
import { ProductSliderComponent } from './home/product-slider/product-slider.component';
import { ProductTabComponent } from './home/product-tab/product-tab.component';
import { SliderComponent } from './home/slider/slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    HomeComponent,
    LogoComponent,
    CollectionBannerComponent,
    ParallaxBannerComponent,
    ProductSliderComponent,
    ProductTabComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SlickCarouselModule
  ]
})
export class ShopModule { }
