import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCategoriesComponent } from './components/manage-categories/manage-categories.component';
import { TabsModule } from '@annuadvent/ngx-common-ui/tabs';
import { ReactiveFormModule } from '@annuadvent/ngx-common-ui/reactive-form';
import { UtilsModule } from '@annuadvent/ngx-core/utils';
import { SpinnerModule } from '@annuadvent/ngx-common-ui/spinner';
import { CategoriesTreeComponent } from './components/categories-tree/categories-tree.component';
import { CollapsibleModule } from '@annuadvent/ngx-common-ui/collapsible';
import { PictureModule } from '@annuadvent/ngx-common-ui/picture';
import { HelpersCategoriesModule } from '@annuadvent/ngx-core/helpers-categories';

@NgModule({
  declarations: [ManageCategoriesComponent, CategoriesTreeComponent],
  imports: [
    CommonModule,
    TabsModule,
    ReactiveFormModule,
    UtilsModule,
    SpinnerModule,
    CollapsibleModule,
    PictureModule,
    HelpersCategoriesModule
  ],
  exports: [ManageCategoriesComponent, CategoriesTreeComponent]
})
export class CategoriesModule {}
