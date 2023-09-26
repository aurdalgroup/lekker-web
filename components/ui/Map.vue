import { componentNames } from '#build/components';
<template lang="pug">
#map(
  class="ml-[-8px] mr-[-8px] lg:rounded-2xl lg:ma-0"
  ref="map"
)
</template>

<script>
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

export default {
  name: 'Map',
  data: () => ({
    center: [24.951394, 60.178745]
  }),
  mounted() {
    const map = new mapboxgl.Map({
      container: this.$refs.map,
      style: 'mapbox://styles/mapbox/light-v11',
      center: this.center,
      zoom: 16,
      attributionControl: false,
      cooperativeGestures: true
    })

    const marker = new mapboxgl.Marker({ color: '#6c845b' })
      .setLngLat(this.center)
      .addTo(map)
  }
}
</script>

<style lang="stylus">
#map
  height 300px

  .mapboxgl-ctrl
    display none !important
</style>
