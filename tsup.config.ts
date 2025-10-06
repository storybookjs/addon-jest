import { defineConfig, type Options } from 'tsup';

export default defineConfig(async (options) => {
  const commonConfig: Options = {
    clean: false,
    format: ['esm'],
    treeshake: true,
    splitting: true,
    external: ['react', 'react-dom', '@storybook/icons', 'storybook'],
  };

  const configs: Options[] = [
    {
      ...commonConfig,
      entry: ['./src/index.ts'],
      outDir: 'dist',
    },
    {
      ...commonConfig,
      entry: ['./src/manager.tsx'],
      outDir: 'dist',
    },
  ];

  return configs;
});
