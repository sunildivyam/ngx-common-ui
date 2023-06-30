import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './components/drawer/drawer.component';



@NgModule({
  declarations: [
    DrawerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DrawerComponent
  ],
})
export class DrawerModule { }
