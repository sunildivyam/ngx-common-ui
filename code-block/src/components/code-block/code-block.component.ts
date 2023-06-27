import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ToolbarItem } from '@annuadvent/ngx-common-ui/toolbar';
import { HighlightService } from '../../services/highlight.service';
import { CODE_BLOCK_TOOLBAR_ITEMS } from '../../constants/code-block.constants';
import { CodeBlockInfo, SourceLanguage } from '../../interfaces/code-block.interface';
/**
 * CodeBlock Component applies the formatting and highlighting of the source code
 * and renders the source code in <code>\<pre\></code> and <code>\<code\></code> html tag.
 * This uses Primejs javascript library for this purpose.
 * Component supports many other languages including javascript, typescript, scss, sass, css, markup etc..
 */
@Component({
  selector: 'anu-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss']
})
export class CodeBlockComponent implements OnInit, OnChanges {

  /**
   * Source code that needs to be highlighted.
   */
  @Input() source: string = '';

  /**
  * Source code language, ie. one of the supported language name.
  */
  @Input() language = 'typescript';

  /**
   * <code>enableEdit</code> property if false, shows the highlighted code block,
   * and does not allow to edit the source code and its language.
   * If true, edit toolbar becomes visible, and user can update source code and its language.
   */
  @Input() enableEdit: boolean = false;

  @Output() changed = new EventEmitter<CodeBlockInfo>();
  @Output() sourceModalOpenStatusChanged = new EventEmitter<boolean>();

  highlightedSource: string = '';
  toolbarItems: Array<ToolbarItem> = [...CODE_BLOCK_TOOLBAR_ITEMS];
  showSourceForm: boolean = false;
  sourceLanguages: Array<SourceLanguage> = [];

  //SourceForm bound variables
  newSource: string = '';
  newSourceLanguage: string = '';

  constructor(private hltService: HighlightService) {
    this.sourceLanguages = this.hltService.getSourceLanguagesList();
  }

  private highlightSource() {
    setTimeout(() => this.highlightedSource = this.hltService.highlight(this.source, this.language));
  }

  ngOnInit(): void {
    this.highlightSource();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.highlightSource();
  }

  public toolbarChanged(selectedItem: ToolbarItem): void {
    this.showSourceForm = true;
    this.newSource = this.source;
    this.newSourceLanguage = this.language;
    this.sourceModalOpenStatusChanged.emit(true);
  }

  public modalOkClicked(modalOpened: boolean): void {
    this.showSourceForm = modalOpened;
    this.source = this.newSource;
    this.language = this.newSourceLanguage;
    this.highlightSource();
    this.changed.emit({ source: this.source, language: this.language } as CodeBlockInfo);
    this.sourceModalOpenStatusChanged.emit(modalOpened);
  }

  public modalCancelClicked(modalOpened: boolean): void {
    this.showSourceForm = modalOpened;
    this.sourceModalOpenStatusChanged.emit(modalOpened);
  }
}
