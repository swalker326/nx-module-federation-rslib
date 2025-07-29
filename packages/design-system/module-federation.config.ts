import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'ui',
  //@ts-expect-error - trust me bro
  filename: 'remoteEntry.js',
  exposes: {
    './button': './src/components/ui/button.tsx',
    './skeleton': './src/components/ui/skeleton.tsx',
  },
  dts: false,
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
