import { defineConfig } from '@rslib/core';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { pluginReact } from '@rsbuild/plugin-react';
import { RsbuildPlugin } from '@rsbuild/core';
import { withZephyr } from 'zephyr-rspack-plugin';
import config from './module-federation.config';

const pluginZephyrRsbuild = (): RsbuildPlugin => ({
  name: 'plugin-zephyr-rsbuild',
  setup(api) {
    api.onBeforeCreateCompiler(async ({ bundlerConfigs }) => {
      await withZephyr()(bundlerConfigs[0]);
    });
  },
});

export default defineConfig({
  lib: [
    {
      format: 'mf',
      output: {
        distPath: {
          root: './dist',
        },
        // for production, add online assetPrefix here
        assetPrefix: 'auto',
      },
      // for Storybook to dev
      dev: {
        assetPrefix: 'http://localhost:3001/',
      },
      plugins: [pluginModuleFederation(config, {}), pluginZephyrRsbuild()],
    },
  ],
  server: {
    port: 3001,
  },
  output: {
    target: 'web',
  },
  plugins: [pluginReact()],
});
