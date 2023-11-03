import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    HeroComponent
  ]
})
export class SharedModule { }
