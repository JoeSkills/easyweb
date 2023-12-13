import { resolve } from 'path';

export default {
  // config options
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about-us/index.html'),
        services: resolve(__dirname, 'services/index.html'),
        api: resolve(__dirname, 'services/api-integration/index.html'),
        domain: resolve(__dirname, 'services/domain-hosting/index.html'),
        ecommerce: resolve(
          __dirname,
          'services/ecommerce-development/index.html'
        ),
        fullstack: resolve(
          __dirname,
          'services/fullstack-development/index.html'
        ),
        responsive: resolve(
          __dirname,
          'services/responsive-web-design/index.html'
        ),
        maintenance: resolve(
          __dirname,
          'services/website-maintenance/index.html'
        ),
        redesign: resolve(__dirname, 'services/website-redesign/index.html'),
        contact: resolve(__dirname, 'contact-us/index.html'),
        prices: resolve(__dirname, 'our-prices/index.html'),
        google: resolve(__dirname, 'google95764015fded17ad.html'),
      },
    },
  },
};
