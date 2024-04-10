import { NestedNavItem } from '../../interfaces/nested-nav.interface';

export const NAV_ITEMS: Array<NestedNavItem> = [
  {
    href: ['./sample-route1'],
    title: 'Nav Item 1',
    disabled: false
  },
  {
    href: ['./sample-route2'],
    title: 'Nav Item 2',
    disabled: false,
    children: [
      {
        href: ['./sample-route3'],
        title: 'Nav Item 3',
        disabled: true
      },
      {
        href: ['./sample-route4'],
        title: 'Nav Item 4',
        disabled: false
      },
      {
        href: ['./sample-route5'],
        title: 'Nav Item 5',
        disabled: false
      }
    ]
  }
];

export const NestedNavComponent: any = {
  projectionContent: '',
  inputPropsValues: {
    items: NAV_ITEMS,
    logoUrl: '/assets/annu-advent-logo.png',
    fixed: false,
    fullWidthItems: true
  }
};
