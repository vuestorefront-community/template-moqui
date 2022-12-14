const path = require('path');

export function getRoutes(themeDir = __dirname) {
  return [{
    name: 'home',
    path: '/',
    component: path.resolve(themeDir, 'pages/Home.vue')
  },
  {
    name: 'product',
    path: '/p/:id/:slug/',
    component: path.resolve(themeDir, 'pages/Product.vue')
  },
  {
    name: 'category',
    path: '/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?',
    component: path.resolve(themeDir, 'pages/Category.vue')
  },
  {
    name: 'my-account',
    path: '/my-account/:pageName?',
    component: path.resolve(themeDir, 'pages/MyAccount.vue')
  },
  {
    name: 'checkout',
    path: '/checkout',
    component: path.resolve(themeDir, 'pages/Checkout.vue'),
    children: [
      {
        path: 'account',
        name: 'account',
        component: path.resolve(themeDir, 'pages/Checkout/Account.vue')
      },
      {
        path: 'shipping',
        name: 'shipping',
        component: path.resolve(themeDir, 'pages/Checkout/Shipping.vue')
      },
      {
        path: 'payment',
        name: 'payment',
        component: path.resolve(themeDir, 'pages/Checkout/Payment.vue')
      },
      {
        path: 'thank-you',
        name: 'thank-you',
        component: path.resolve(themeDir, 'pages/Checkout/ThankYou.vue')
      }
    ]
  },
  {
    name: 'reset-password',
    path: '/reset-password',
    component: path.resolve(themeDir, 'pages/ResetPassword.vue')
  },
  {
    name: 'pay',
    path: '/gateway/pay',
    component: path.resolve(themeDir, 'pages/Gateway/Pay.vue')
  },
  {
    name: 'postpay',
    path: '/gateway/postpay',
    component: path.resolve(themeDir, 'pages/Gateway/Pay.vue')
  }];
}
