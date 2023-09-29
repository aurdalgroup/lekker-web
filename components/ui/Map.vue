import { componentNames } from '#build/components';
<template lang="pug">
#map(
  class="ml-[-8px] mr-[-8px] lg:rounded-2xl lg:ma-0"
  ref="map"
)
</template>

<script>
import { mapActions } from 'pinia'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

import useAppStore from '@/stores/app'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

export default {
  name: 'Map',
  data: () => ({
    map: null,
    center: [24.93976, 60.165982],
    marker: null,
    position: null
  }),
  watch: {
    position(value) {
      if (this.marker) this.marker.remove()

      this.marker = new mapboxgl.Marker({ color: '#2563eb' })
        .setLngLat(value)
        .addTo(this.map)

      this.map.panTo(value, { animate: true, duration: 4000 })
    }
  },
  methods: {
    ...mapActions(useAppStore, ['getPosition']),
    async doGetPosition() {
      try {
        const { position } = await this.getPosition()
        this.position = position
        console.log('--- position: ', position)
      } catch (e) {
        console.log('--- failed to get position: ', e)
      }
    }
  },
  mounted() {
    this.map = new mapboxgl.Map({
      container: this.$refs.map,
      style: 'mapbox://styles/mapbox/light-v11',
      center: this.center,
      zoom: 16,
      attributionControl: false,
      cooperativeGestures: true
    })

    this.doGetPosition()
  }
}
</script>

<style lang="stylus">
#map
  height 300px

  .mapboxgl-ctrl
    display none !important
</style>
