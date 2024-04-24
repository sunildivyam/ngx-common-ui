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
import { categoryParams } from '../../constants/category-form-params.constant';
import { Tab } from '@annuadvent/ngx-common-ui/tabs';
import {
  FormConfigParameter,
  FormControlValue
} from '@annuadvent/ngx-core/helpers-forms';
import { CategoryImageUpload } from '../../interfaces/category-image-upload.interface';

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
  @Output() uploadImageClicked = new EventEmitter<CategoryImageUpload>();
  @Output() uploadBannerImageClicked = new EventEmitter<CategoryImageUpload>();

  // variables
  tabs: Array<Tab> = [];
  currentTab: Tab = null;
  warning: string = '';

  currentCat = {};
  isEditMode = {};
  params = {};
  cats = {};

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    changes.levels || (changes.value && this.init());
  }

  private getTabs(count: number): Array<Tab> {
    if (!count) count = 0;
    const tabs = [];
    for (let i = 0; i < count; i++) {
      tabs.push({
        name: `${i + 1}`,
        title: `L${i + 1} categroies`,
        active: i === 0 ? true : false
      } as Tab);
    }

    return tabs;
  }

  private toggleImageUpload(enable: boolean): void {
    const imageUrlP: FormConfigParameter =
      this.params[this.currentTab.name]['imageUrl'];
    const imageUrlImageP: FormConfigParameter =
      this.params[this.currentTab.name]['imageUrlImage'];

    const bannerUrlP: FormConfigParameter =
      this.params[this.currentTab.name]['bannerUrl'];
    const bannerUrlImageP: FormConfigParameter =
      this.params[this.currentTab.name]['bannerUrlImage'];

    bannerUrlP.hidden = !enable;
    bannerUrlImageP.hidden = true;

    imageUrlP.hidden = !enable;
    imageUrlImageP.hidden = true;

    this.params[this.currentTab.name] = this.params[this.currentTab.name];
  }

  private init(): void {
    this.tabs = this.getTabs(this.levels);
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
      this.toggleImageUpload(true);
    } else {
      this.isEditMode[listId] = false;
      this.toggleImageUpload(false);
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

  public onAction(formControlValue: FormControlValue, listId: string): void {
    const { key, value, control } = formControlValue;
    switch (key) {
      case 'imageUrlImage':
        control.markAsDirty();
        if (this.isEditMode[listId] && control.valid && value) {
          this.uploadImageClicked.emit({
            category: this.currentCat[listId],
            imageUpload: value
          });
        }
        break;
      case 'imageUrl':
        // Show/hide Image Upload to change Image
        this.params[listId]['imageUrlImage'].hidden =
          !this.params[listId]['imageUrlImage'].hidden;
        break;
      case 'bannerUrlImage':
        control.markAsDirty();
        if (this.isEditMode[listId] && control.valid && value) {
          this.uploadBannerImageClicked.emit({
            category: this.currentCat[listId],
            imageUpload: value
          });
        }
        break;
      case 'bannerUrl':
        // Show/hide Image Upload to change Image
        this.params[listId]['bannerUrlImage'].hidden =
          !this.params[listId]['bannerUrlImage'].hidden;
        break;
      default:
    }
  }

  public onAdd(event: any, listId: string): void {
    event.preventDefault();
    const previousLevelListId = parseInt(listId) - 1;
    if (listId === '1' || this.cats[previousLevelListId]?.length) {
      this.isEditMode[listId] = false;
      this.currentCat[listId] = new Category();
      this.toggleImageUpload(false);
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
