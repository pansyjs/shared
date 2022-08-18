import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  define: {
    __VUE_OPTIONS_API__: 'true',
    __VUE_PROD_DEVTOOLS__: 'false',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'packages/.test/setup.ts')],
    reporters: 'dot',
    deps: {
      inline: ['vue2', '@vue/composition-api', 'vue-demi'],
    },
  },
  ssr: {
    noExternal: [/@vueuse\/.*/],
  },
});
