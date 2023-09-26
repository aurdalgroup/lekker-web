<template lang="pug">
main
  ui-hero

  .text-2xl.font-medium.text-gray-800.mt-8.mb-2(
    class="lg:text-4xl lg:mt-16 lg:mb-6"
  ) Cart map
  ui-map

  .text-2xl.font-medium.text-gray-800.mt-8(
    class="lg:text-4xl lg:mt-16"
  ) Share your food with <span class="text-blue-600">#lekker.fi</span>
  .mt-20
</template>

<script>
export default {
  name: 'Index'
}
</script>
