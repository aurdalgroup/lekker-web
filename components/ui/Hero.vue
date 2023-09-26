import { componentNames } from '#build/components';
<template lang="pug">
#hero.text-center.text-gray-800.pt-8.pb-2(
  class="lg:pt-16 lg:pb-16 lg:border-b lg:border-b-gray-300"
)
  .text-base.font-medium(
    class="lg:text-xl"
  ) A new food cart experience in Helsinki
  .text-4xl.font-medium.pt-2.leading(
    class="lg:text-5xl lg:pt-4"
  )
    | Nordic fresh sandwiches
    br
    | simply lekker.

  .grid.grid-cols-3.gap-2.pt-10(
    class="lg:gap-16 lg:pt-16"
  )
    img.rounded-2xl(src="/norwegian.png")
    img.rounded-2xl(src="/swedish.png")
    img.rounded-2xl(src="/finnish.png")
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="stylus" scoped>
#hero
  .leading
    line-height 1.15 !important
</style>
