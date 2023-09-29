import { componentNames } from '#build/components';
<template lang="pug">
#gallery
  .grid.grid-cols-3.gap-2.mb-4(
    class="lg:gap-16 lg:mb-12"
  )
    template(v-if="images")
      .leading-tight.line-clamp-2(
        v-for="(item, index) in images"
        class="lg:leading-normal"
      )
        a(
          :href="item.permalink"
          target="_new"
        )
          img.mb-1(
            :src="item.media_url"
            class="lg:rounded-2xl lg:mb-2"
          )
        a.inline.font-medium.text-xs.text-gray-800.mr-2(
          :href="`https://www.instagram.com/${item.username}`"
          class="lg:text-sm hover:underline"
          target="_new"
        ) {{ item.username }}
        .inline.font-light.text-xs.text-gray-600(
          class="lg:text-sm"
          v-html="item.caption.replace(/(#[A-Za-z]+)/g, `<a class='text-blue-600 hover:underline' href='https://www.instagram.com/explore/tags/lekkerfi/' target='_new'>$1</span>`)"
        )
    template(v-else)
      .flex.items-center.justify-center.w-full.aspect-square.bg-gray-200.animate-pulse(
        v-for="(item, index) in [...Array(3).keys()]"
        class="lg:rounded-2xl"
      )
        svg.w-6.h-6.text-gray-300(
          class="lg:w-10 lg:h-10"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 18"
        )
          path(
            d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
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
    images: null
  }),
  methods: {
    ...mapActions(useAppStore, ['getImage', 'refresh']),
    async doGetImage() {
      try {
        const data = await this.getImage()
        this.images = data
        console.log('--- images: ', data)
      } catch (e) {
        console.log('--- failed to get images: ', e)
      }
    },
    async doRefresh() {
      try {
        const result = await this.refresh()
        console.log('--- refresh: ', result)
      } catch (e) {
        console.log('--- failed to refresh: ', e)
      }
    }
  },
  mounted() {
    this.doGetImage()
  }
}
</script>

<style lang="stylus"></style>
