<template lang="pug">
main
  ui-hero

  .text-3xl.font-medium.text-gray-800.text-center.mt-10.mb-6(
    class="lg:text-4xl lg:mt-20 lg:mb-12"
  ) Live cart map
  ui-map

  .text-3xl.font-medium.text-gray-800.text-center.mt-10.mb-6(
    class="lg:text-4xl lg:mt-20 lg:mb-12"
  )
    | Share your food with 
    a.text-blue-600(
      class="hover:underline"
      href="https://www.instagram.com/explore/tags/lekkerfi/"
      target="_new"
    ) #lekkerFi
  ui-gallery
</template>

<script>
export default {
  name: 'Index'
}
</script>
