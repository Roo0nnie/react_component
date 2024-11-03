// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Label from '../../../components/label';
import Iconify from '../../../components/iconify';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  blog: icon('ic_blog'),
  cart: icon('ic_cart'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

const navConfig = [

  // My Route
  // ----------------------------------------------------------------------
  {
    subheader: 'Mae Ibong',
    items: [
      { title: 'Favorite Songs', path: PATH_DASHBOARD.SONGS, icon: ICONS.lock },
    ],
  },

  // // INPUTS
  // // ----------------------------------------------------------------------
   {
       subheader: 'INPUTS',
       items: [
    { title: 'Autocomplete', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
    { title: 'Button', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
    { title: 'Button Group', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics },
    { title: 'Checkbox', path: PATH_DASHBOARD.general.banking, icon: ICONS.banking },
    { title: 'Floating Action button ', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
    { title: 'Radio Group ', path: PATH_DASHBOARD.general.file, icon: ICONS.file },
    { title: 'Rating', path: PATH_DASHBOARD.general.rating, icon: ICONS.file },
    { title: 'Select', path: PATH_DASHBOARD.general.select, icon: ICONS.file },
    { title: 'Slider', path: PATH_DASHBOARD.general.slider, icon: ICONS.file },
    { title: 'Switch ', path: PATH_DASHBOARD.general.switch, icon: ICONS.file },
    { title: 'Text Field ', path: PATH_DASHBOARD.general.textfield, icon: ICONS.file },
    { title: 'Transfer List ', path: PATH_DASHBOARD.general.transferlist, icon: ICONS.file },
    { title: 'Toggle Button ', path: PATH_DASHBOARD.general.togglebutton, icon: ICONS.file }

  ],
   },

  // DATA DISPLAY
  // ----------------------------------------------------------------------
  {
    subheader: 'Data Display',
    items: [
    { title: 'Avatar', path: PATH_DASHBOARD.general.avatar, icon: ICONS.dashboard },
    { title: 'Badge', path: PATH_DASHBOARD.general.badge, icon: ICONS.ecommerce },
    { title: 'Chip', path: PATH_DASHBOARD.general.chip, icon: ICONS.analytics },
    { title: 'Divider', path: PATH_DASHBOARD.general.divider, icon: ICONS.banking },
    { title: 'Icons ', path: PATH_DASHBOARD.general.icon, icon: ICONS.booking },
    { title: 'Material Icons ', path: PATH_DASHBOARD.general.material, icon: ICONS.file },
    { title: 'List', path: PATH_DASHBOARD.general.list, icon: ICONS.file },
    { title: 'Table', path: PATH_DASHBOARD.general.table, icon: ICONS.file },
    { title: 'Tooltip', path: PATH_DASHBOARD.general.tooltip, icon: ICONS.file },
    { title: 'Typography ', path: PATH_DASHBOARD.general.typography, icon: ICONS.file }
],
},


 // FEEDBACK
   // ----------------------------------------------------------------------
     {
  subheader: 'Feedback',
    items: [
      { title: 'Alert', path: PATH_DASHBOARD.general.alert, icon: ICONS.dashboard },
      { title: 'Backdrop', path: PATH_DASHBOARD.general.backdrop, icon: ICONS.ecommerce },
      { title: 'Dialog', path: PATH_DASHBOARD.general.dialog, icon: ICONS.analytics },
      { title: 'Progress', path: PATH_DASHBOARD.general.progress, icon: ICONS.banking },
      { title: 'Skeleton', path: PATH_DASHBOARD.general.skeleton, icon: ICONS.booking },
      { title: 'Snackbar', path: PATH_DASHBOARD.general.snackbar, icon: ICONS.file }
   
   ],
   },
  //     // SURFACES
  {
   subheader: 'Surfaces',
    items: [
      { title: 'Accordion', path: PATH_DASHBOARD.general.accordion, icon: ICONS.dashboard },
      { title: 'App Bar', path: PATH_DASHBOARD.general.appbar, icon: ICONS.ecommerce },
      { title: 'Card', path: PATH_DASHBOARD.general.card, icon: ICONS.analytics },
      { title: 'Paper', path: PATH_DASHBOARD.general.paper, icon: ICONS.banking }
   ],
   },

  //     //NAVIGATION
   
     {
   subheader: 'Navigation',
   items: [
    { title: 'Bottom Navigation', path: PATH_DASHBOARD.general.bottomnavigation, icon: ICONS.dashboard },
    { title: 'Breadcrumbs', path: PATH_DASHBOARD.general.breadcrumbs, icon: ICONS.ecommerce },
    { title: 'Drawer', path: PATH_DASHBOARD.general.drawer, icon: ICONS.analytics },
    { title: 'Link', path: PATH_DASHBOARD.general.link, icon: ICONS.banking },
    { title: 'Menu', path: PATH_DASHBOARD.general.menu, icon: ICONS.booking },
    { title: 'Pagination', path: PATH_DASHBOARD.general.pagination, icon: ICONS.file },
    { title: 'Speed Dial', path: PATH_DASHBOARD.general.speeddial, icon: ICONS.booking },
    { title: 'Stepper', path: PATH_DASHBOARD.general.stepper, icon: ICONS.file },
    { title: 'Tabs', path: PATH_DASHBOARD.general.tab, icon: ICONS.booking }
  ],
  },


  //       title: 'menu_level',
  //       path: '#/dashboard/menu_level',
  //       icon: ICONS.menuItem,
  //       children: [
  //         {
  //           title: 'menu_level_2a',
  //           path: '#/dashboard/menu_level/menu_level_2a',
  //         },
  //         {
  //           title: 'menu_level_2b',
  //           path: '#/dashboard/menu_level/menu_level_2b',
  //           children: [
  //             {
  //               title: 'menu_level_3a',
  //               path: '#/dashboard/menu_level/menu_level_2b/menu_level_3a',
  //             },
  //             {
  //               title: 'menu_level_3b',
  //               path: '#/dashboard/menu_level/menu_level_2b/menu_level_3b',
  //               children: [
  //                 {
  //                   title: 'menu_level_4a',
  //                   path: '#/dashboard/menu_level/menu_level_2b/menu_level_3b/menu_level_4a',
  //                 },
  //                 {
  //                   title: 'menu_level_4b',
  //                   path: '#/dashboard/menu_level/menu_level_2b/menu_level_3b/menu_level_4b',
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       title: 'item_disabled',
  //       path: '#disabled',
  //       icon: ICONS.disabled,
  //       disabled: true,
  //     },

  //     {
  //       title: 'item_label',
  //       path: '#label',
  //       icon: ICONS.label,
  //       info: (
  //         <Label color="info" startIcon={<Iconify icon="eva:email-fill" />}>
  //           NEW
  //         </Label>
  //       ),
  //     },
  //     {
  //       title: 'item_caption',
  //       path: '#caption',
  //       icon: ICONS.menuItem,
  //       caption:
  //         'Quisque malesuada placerat nisl. In hac habitasse platea dictumst. Cras id dui. Pellentesque commodo eros a enim. Morbi mollis tellus ac sapien.',
  //     },
  //     {
  //       title: 'item_external_link',
  //       path: 'https://www.google.com/',
  //       icon: ICONS.external,
  //     },
  //     {
  //       title: 'blank',
  //       path: PATH_DASHBOARD.blank,
  //       icon: ICONS.blank,
  //     },
  //   ],
  // },
];

export default navConfig;
