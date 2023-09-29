import { componentNames } from '#build/components';
<template lang="pug">
#gallery
  .grid.grid-cols-3.gap-2.mb-4(
    class="lg:gap-16 lg:mb-12"
  )
    img(
      v-for="(item, index) in images"
      :src="item.url"
      class="lg:rounded-2xl"
    )
  .text-center.mb-4(
    class="lg:mb-8"
  )
    a.border.border-gray-300.text-gray-800.text-md.inline-flex.rounded-full.px-4.py-1(
      href="https://www.instagram.com/lekkerfi/"
      class="hover:bg-gray-100 lg:text-lg"
      target="_new"
    ) More
</template>

<script>
import { mapActions } from 'pinia'

import useAppStore from '@/stores/app'

export default {
  name: 'Gallery',
  data: () => ({
    images: [
      { url: '/finnish.jpg' },
      { url: '/norwegian.jpg' },
      { url: '/swedish.jpg' },
      { url: '/norwegian.jpg' },
      { url: '/finnish.jpg' },
      { url: '/swedish.jpg' },
      { url: '/finnish.jpg' },
      { url: '/swedish.jpg' },
      { url: '/norwegian.jpg' }
    ]
  }),
  methods: {
    ...mapActions(useAppStore, ['getImage']),
    async doGetImage() {
      try {
        const { images } = await this.getImage()
        // this.images = images
        console.log('--- images: ', images)
      } catch (e) {
        console.log('--- failed to get images: ', e)
      }
    }
  },
  mounted() {
    this.doGetImage()
  }
}
</script>

<style lang="stylus"></style>
