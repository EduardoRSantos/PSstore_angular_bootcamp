import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardLabelComponent } from 'src/app/components/card/card-label/card-label.component';
import { CardPricingComponent } from 'src/app/components/card/card-pricing/card-pricing.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    CardLabelComponent,
    CardPricingComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
