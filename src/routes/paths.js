// ----------------------------------------------------------------------


function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password'),
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  components: '/components',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  
  // My Route
  mydashboard: path(ROOTS_DASHBOARD, '/quinsayas-dashboard'),
  SONGS: path(ROOTS_DASHBOARD, '/Ibong-favsongs'),
  kanban: path(ROOTS_DASHBOARD, '/kanban'),
  calendar: path(ROOTS_DASHBOARD, '/calendar'),
  fileManager: path(ROOTS_DASHBOARD, '/files-manager'),
  permissionDenied: path(ROOTS_DASHBOARD, '/permission-denied'),
  blank: path(ROOTS_DASHBOARD, '/blank'),
  general: {
    app: path(ROOTS_DASHBOARD, '/autocomplete'),
    ecommerce: path(ROOTS_DASHBOARD, '/button'),
    analytics: path(ROOTS_DASHBOARD, '/button-group'),
    banking: path(ROOTS_DASHBOARD, '/checkbox'),
    booking: path(ROOTS_DASHBOARD, '/floating-action'),
    file: path(ROOTS_DASHBOARD, '/radio-button'),
    rating: path(ROOTS_DASHBOARD, '/rating'),
    select: path(ROOTS_DASHBOARD, '/select'),
    slider: path(ROOTS_DASHBOARD, '/slider'),
    switch: path(ROOTS_DASHBOARD, '/switch'),
    textfield: path(ROOTS_DASHBOARD, '/textfield'),
    transferlist: path(ROOTS_DASHBOARD, '/transfer-list'),
    togglebutton: path(ROOTS_DASHBOARD, '/toggle-button'),
    avatar: path(ROOTS_DASHBOARD, '/avatar'),
    badge: path(ROOTS_DASHBOARD, '/badge'),
    chip: path(ROOTS_DASHBOARD, '/chip'),
    divider: path(ROOTS_DASHBOARD, '/divider'),
    icon: path(ROOTS_DASHBOARD, '/icon'),
    material: path(ROOTS_DASHBOARD, '/material-icon'),
    list: path(ROOTS_DASHBOARD, '/list'),
    table: path(ROOTS_DASHBOARD, '/table'),
    tooltip: path(ROOTS_DASHBOARD, '/tooltip'),
    typography: path(ROOTS_DASHBOARD, '/typography'),
    alert: path(ROOTS_DASHBOARD, '/alert'),
    backdrop: path(ROOTS_DASHBOARD, '/backdrop'),
    dialog: path(ROOTS_DASHBOARD, '/dialog'),
    progress: path(ROOTS_DASHBOARD, '/progress'),
    skeleton: path(ROOTS_DASHBOARD, '/skeleton'),
    snackbar: path(ROOTS_DASHBOARD, '/snackbar'),
    accordion: path(ROOTS_DASHBOARD, '/accordion'),
    appbar: path(ROOTS_DASHBOARD, '/appbar'),
    card: path(ROOTS_DASHBOARD, '/card'),
    paper: path(ROOTS_DASHBOARD, '/paper'),

    bottomnavigation: path(ROOTS_DASHBOARD, '/bottomnavigation'),
    breadcrumbs: path(ROOTS_DASHBOARD, '/breadcrumbs'),
    drawer: path(ROOTS_DASHBOARD, '/drawer'),
    link: path(ROOTS_DASHBOARD, '/link'),
    menu: path(ROOTS_DASHBOARD, '/menu'),
    pagination: path(ROOTS_DASHBOARD, '/pagination'),
    speeddial: path(ROOTS_DASHBOARD, '/speeddial'),
    stepper: path(ROOTS_DASHBOARD, '/stepper'),
    tab: path(ROOTS_DASHBOARD, '/tab'),
  },
  mail: {
    root: path(ROOTS_DASHBOARD, '/mail'),
    all: path(ROOTS_DASHBOARD, '/mail/all'),
  },
  chat: {
    root: path(ROOTS_DASHBOARD, '/chat'),
    new: path(ROOTS_DASHBOARD, '/chat/new'),
    view: (name) => path(ROOTS_DASHBOARD, `/chat/${name}`),
  },
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    new: path(ROOTS_DASHBOARD, '/user/new'),
    list: path(ROOTS_DASHBOARD, '/user/list'),
    cards: path(ROOTS_DASHBOARD, '/user/cards'),
    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    account: path(ROOTS_DASHBOARD, '/user/account'),
    edit: (name) => path(ROOTS_DASHBOARD, `/user/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
  },
  eCommerce: {
    root: path(ROOTS_DASHBOARD, '/e-commerce'),
    shop: path(ROOTS_DASHBOARD, '/e-commerce/shop'),
    list: path(ROOTS_DASHBOARD, '/e-commerce/list'),
    checkout: path(ROOTS_DASHBOARD, '/e-commerce/checkout'),
    new: path(ROOTS_DASHBOARD, '/e-commerce/product/new'),
    view: (name) => path(ROOTS_DASHBOARD, `/e-commerce/product/${name}`),
    edit: (name) => path(ROOTS_DASHBOARD, `/e-commerce/product/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-blazer-low-77-vintage/edit'),
    demoView: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-air-force-1-ndestrukt'),
  },
  invoice: {
    root: path(ROOTS_DASHBOARD, '/invoice'),
    list: path(ROOTS_DASHBOARD, '/invoice/list'),
    new: path(ROOTS_DASHBOARD, '/invoice/new'),
    view: (id) => path(ROOTS_DASHBOARD, `/invoice/${id}`),
    edit: (id) => path(ROOTS_DASHBOARD, `/invoice/${id}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
    demoView: path(ROOTS_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
  },
  blog: {
    root: path(ROOTS_DASHBOARD, '/blog'),
    posts: path(ROOTS_DASHBOARD, '/blog/posts'),
    new: path(ROOTS_DASHBOARD, '/blog/new'),
    view: (title) => path(ROOTS_DASHBOARD, `/blog/post/${title}`),
    demoView: path(ROOTS_DASHBOARD, '/blog/post/apply-these-7-secret-techniques-to-improve-event'),
  },
};

export const PATH_DOCS = {
  root: 'https://docs.minimals.cc',
  changelog: 'https://docs.minimals.cc/changelog',
};

export const PATH_ZONE_ON_STORE = 'https://mui.com/store/items/zone-landing-page/';

export const PATH_MINIMAL_ON_STORE = 'https://mui.com/store/items/minimal-dashboard/';

export const PATH_FREE_VERSION = 'https://mui.com/store/items/minimal-dashboard-free/';

export const PATH_FIGMA_PREVIEW =
  'https://www.figma.com/file/rWMDOkMZYw2VpTdNuBBCvN/%5BPreview%5D-Minimal-Web.26.11.22?node-id=0%3A1&t=ya2mDFiuhTXXLLF1-1';
