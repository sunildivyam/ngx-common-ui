import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from './components/code-block/code-block.component';
import { HighlightService } from './services/highlight.service';
import { ToolbarModule } from '@annuadvent/ngx-common-ui/toolbar';
import { ModalModule } from '@annuadvent/ngx-common-ui/modal';

@NgModule({
  declarations: [
    CodeBlockComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    ModalModule,
  ],
  exports: [
    CodeBlockComponent
  ],
  providers: [HighlightService]
})
export class CodeBlockModule { }
