<template lang="pug">
main
  ui-hero

  .text-3xl.font-medium.text-gray-800.text-center.mt-10.mb-4(
    class="lg:text-4xl lg:mt-20 lg:mb-8"
  ) Live cart map
  ui-map

  .text-3xl.font-medium.text-gray-800.text-center.mt-10.mb-4(
    class="lg:text-4xl lg:mt-20 lg:mb-8"
  ) Share your food with <span class="text-lime-600">#lekker.fi</span>
  .mt-20
</template>

<script>
export default {
  name: 'Index'
}
</script>
