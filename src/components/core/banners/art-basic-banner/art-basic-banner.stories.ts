import type { Meta, StoryObj } from '@storybook/vue3-vite'

import ArtBasicBanner from './index.vue'

const meta = {
  component: ArtBasicBanner
} satisfies Meta<typeof ArtBasicBanner>

export default meta
type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Index: Story = {
  render: (args) => ({
    components: { ArtBasicBanner },
    setup() {
      return { args }
    },
    template: '<ArtBasicBanner v-bind="args" />'
  }),
  args: {
    title: '欢迎使用 Art Design Pro',
    subtitle: '一个现代化的 Vue 3 管理系统模板',
    height: '11rem',
    titleColor: 'white',
    subtitleColor: 'white',
    backgroundColor: '#000',
    decoration: true,
    buttonConfig: {
      show: true,
      text: '查看详情',
      color: '#fff',
      textColor: '#333',
      radius: '6px'
    },
    meteorConfig: {
      enabled: false,
      count: 10
    },
    imageConfig: {
      src: '',
      width: '12rem',
      bottom: '-3rem',
      right: '0'
    }
  }
}

// 带流星效果的横幅
export const WithMeteors: Story = {
  render: (args) => ({
    components: { ArtBasicBanner },
    setup() {
      return { args }
    },
    template: '<ArtBasicBanner v-bind="args" />'
  }),
  args: {
    title: '流星效果横幅',
    subtitle: '在暗色模式下显示流星动画效果',
    height: '11rem',
    titleColor: 'white',
    subtitleColor: 'white',
    backgroundColor: '#1a1a1a',
    decoration: true,
    buttonConfig: {
      show: true,
      text: '体验效果',
      color: '#fff',
      textColor: '#333',
      radius: '6px'
    },
    meteorConfig: {
      enabled: true,
      count: 8
    },
    imageConfig: {
      src: '',
      width: '12rem',
      bottom: '-3rem',
      right: '0'
    }
  }
}

// 自定义背景色的横幅
export const CustomBackground: Story = {
  render: (args) => ({
    components: { ArtBasicBanner },
    setup() {
      return { args }
    },
    template: '<ArtBasicBanner v-bind="args" />'
  }),
  args: {
    title: '自定义背景色',
    subtitle: '支持自定义背景颜色和文字颜色',
    height: '11rem',
    titleColor: '#333',
    subtitleColor: '#666',
    backgroundColor: '#f0f9ff',
    decoration: false,
    buttonConfig: {
      show: true,
      text: '了解更多',
      color: '#3b82f6',
      textColor: '#fff',
      radius: '8px'
    },
    meteorConfig: {
      enabled: false,
      count: 10
    },
    imageConfig: {
      src: '',
      width: '12rem',
      bottom: '-3rem',
      right: '0'
    }
  }
}
