import { componentNames } from '#build/components';
<template lang="pug">
#hero.text-center.text-gray-800.mt-8.mb-2(
  class="lg:mt-16 lg:pb-16 lg:border-b lg:border-b-gray-300"
)
  .text-base.font-medium(
    class="lg:text-xl"
  ) A new food cart experience in Helsinki
  .text-3xl.font-medium.mt-2.leading(
    class="lg:text-5xl lg:mt-4"
  )
    | Nordic fresh sandwiches
    br
    | simply 
    span.text-transparent.bg-clip-text.bg-gradient-to-r.from-lime-700.to-lime-600 lekker
    | .

  .grid.grid-cols-3.gap-2.mt-10(
    class="lg:gap-16 lg:mt-16"
  )
    img(
      class="lg:rounded-2xl"
      src="/norwegian.png"
    )
    img(
      class="lg:rounded-2xl"
      src="/swedish.png"
    )
    img(
      class="lg:rounded-2xl"
      src="/finnish.png"
    )
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
