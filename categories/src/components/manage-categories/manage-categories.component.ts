import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { Category } from '@annuadvent/ngx-core/helpers-categories';
import { UtilsService } from '@annuadvent/ngx-core/utils';
import { CategoriesService } from '../../services/categories.service';
import { categoryParams } from '../../constants/category-form-params.constant';
import { Tab } from '@annuadvent/ngx-common-ui/tabs';

@Component({
  selector: 'anu-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss']
})
export class ManageCategoriesComponent implements OnInit, OnChanges {
  @Input() levels: number = 0;
  @Input() value: Array<Category> = [];
  @Input() loading: boolean = false;

  @Output() reloadClicked = new EventEmitter<void>();
  @Output() addClicked = new EventEmitter<Category>();
  @Output() updateClicked = new EventEmitter<Category>();
  @Output() deleteClicked = new EventEmitter<Category>();

  // variables
  tabs: Array<Tab> = [];
  currentTab: Tab = null;
  warning: string = '';

  currentCat = {};
  isEditMode = {};
  params = {};
  cats = {};

  constructor(
    private utilsService: UtilsService,
    private catService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    changes.levels || (changes.value && this.init());
  }

  private init(): void {
    this.tabs = this.catService.getTabs(this.levels);
    if (!this.currentTab && this.tabs) this.currentTab = this.tabs[0];
    const cats = this.value || [];

    this.cats = {};
    this.tabs.forEach((tab, index) => {
      // Set Tab cats
      this.cats[tab.name + ''] = cats.filter(
        (cat) => cat.level === parseInt(tab.name)
      );

      // Set Tab Form Params
      this.params[tab.name] = this.utilsService.deepCopy(categoryParams);
      if (index === 0) {
        this.params[tab.name].parents.hidden = true;
      } else {
        this.params[tab.name].parents.hidden = false;
        this.params[tab.name].parents.list = cats
          .filter((cat) => cat.level === index)
          .map((cat) => ({ key: cat.id, value: cat.title }));
        this.params[tab.name].syncValidators = [{ name: 'required' }];
      }

      this.isEditMode[tab.name] = false;
      this.currentCat[tab.name] = null;
    });
  }

  public onTabChange(tab: Tab): void {
    this.currentTab = tab;
  }

  public onCatListChange(event: any, listId: string): void {
    event.preventDefault();
    const cat =
      this.cats[listId].find((cat) => cat.id === event.target.value) || null;
    this.currentCat[listId] = cat;
    if (cat) {
      this.isEditMode[listId] = true;
    } else {
      this.isEditMode[listId] = false;
    }
  }

  public onSave(value: Category, listId: string): void {
    value.level = parseInt(listId);
    this.currentCat[listId] = value;

    if (this.isEditMode[listId]) {
      this.updateClicked.emit(this.currentCat[listId]);
    } else {
      this.addClicked.emit(this.currentCat[listId]);
    }
  }

  public onAdd(event: any, listId: string): void {
    event.preventDefault();
    const previousLevelListId = parseInt(listId) - 1;
    if (listId === '1' || this.cats[previousLevelListId]?.length) {
      this.isEditMode[listId] = false;
      this.currentCat[listId] = new Category();
    } else {
      this.warning = `To add L-${listId} category, You must have one or more L-${previousLevelListId} categories. So add them first.`;
      setTimeout(() => (this.warning = ''), 5000);
    }
  }

  public onDelete(event: any, listId: string): void {
    event.preventDefault();
    this.currentCat[listId]?.id &&
      this.deleteClicked.emit(this.currentCat[listId]);
  }

  public onReload(event: any): void {
    event.preventDefault();
    this.reloadClicked.emit();
  }
}
