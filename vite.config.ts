import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'dynamic-cart-structure',
      fileName: 'dynamic-cart-structure',
    },
  },
  plugins: [dts()],
});