export interface NestedNavItem {
  href?: Array<string>;
  title?: string;
  disabled?: boolean;
  children?: Array<NestedNavItem>;
}
