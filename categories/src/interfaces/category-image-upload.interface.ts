import { ImageUpload } from '@annuadvent/ngx-common-ui/image-upload';
import { Category } from '@annuadvent/ngx-core/helpers-categories';

export interface CategoryImageUpload {
  category: Category;
  imageUpload: ImageUpload;
}
