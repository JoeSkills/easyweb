import { resolve } from 'path';

export default {
  // config options
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about-us/index.html'),
        services: resolve(__dirname, 'services/index.html'),
        contact: resolve(__dirname, 'contact-us/index.html'),
        prices: resolve(__dirname, 'our-prices/index.html'),
        google: resolve(__dirname, 'google95764015fded17ad.html'),
      },
    },
  },
};
