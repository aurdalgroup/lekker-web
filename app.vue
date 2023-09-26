<template lang="pug">
#app.h-full
  nav.fixed.inset-x-0.top-0.z-10
    .container.mx-auto.p-2.flex.items-center.text-gray-100.text-sm(
      class="lg:p-4"
    )
      nuxt-link.inline-flex.h-10(
        class="lg:h-14"
        to="/"
      )
        ui-logo
      .grow
      a.text-gray-800.inline-flex.px-2.py-2(
        href="https://www.instagram.com/lekker.fi/"
        class="hover:text-blue-600"
        target="_new"
      )
        svg.w-6.h-6(
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        )
          path(
            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
            stroke-linecap="round"
            stroke-linejoin="round"
          )
          path(
            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
            stroke-linecap="round"
            stroke-linejoin="round"
          )
  nuxt-page.container.mx-auto.p-2(
    class="lg:p-4 pt-16 lg:pt-24"
  )
</template>

<style lang="stylus" scoped>
#app
  nav
    background-color rgba(240, 240, 240, .8)
    -webkit-backdrop-filter saturate(180%) blur(20px)
    backdrop-filter saturate(180%) blur(20px)
</style>
