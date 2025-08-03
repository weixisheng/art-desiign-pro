import type { StorybookConfig } from '@storybook/vue3-vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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

    // 添加自动导入插件
    if (!config.plugins) {
      config.plugins = []
    }

    config.plugins.push(
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core', 'pinia'],
        resolvers: [ElementPlusResolver()],
        dts: false, // Storybook 环境下不需要生成类型文件
        eslintrc: {
          enabled: false
        },
        // 添加对 composables 的自动导入
        dirs: ['src/composables']
      })
    )

    return config
  }
}
export default config
