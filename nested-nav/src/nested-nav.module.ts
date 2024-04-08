import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedNavComponent } from './components/nested-nav/nested-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NestedNavComponent],
  imports: [CommonModule, RouterModule],
  exports: [NestedNavComponent]
})
export class NestedNavModule {}
