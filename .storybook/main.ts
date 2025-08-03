import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  viteFinal: async (config) => {
    // 设置 esbuild 目标环境为 es2020 以支持 BigInt
    if (config.esbuild) {
      config.esbuild.target = 'es2020'
    } else {
      config.esbuild = { target: 'es2020' }
    }

    // 设置 build.target 为 es2020
    if (config.build) {
      config.build.target = 'es2020'
    } else {
      config.build = { target: 'es2020' }
    }

    return config
  }
}
export default config
