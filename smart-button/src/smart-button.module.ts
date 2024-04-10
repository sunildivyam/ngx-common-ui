import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartButtonComponent } from './components/smart-button/smart-button.component';
import { RouterModule } from '@angular/router';
import { SpinnerModule } from '@annuadvent/ngx-common-ui/spinner';

@NgModule({
  declarations: [SmartButtonComponent],
  imports: [CommonModule, SpinnerModule],
  exports: [SmartButtonComponent]
})
export class SmartButtonModule {}
