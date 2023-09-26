import { componentNames } from '#build/components';
<template lang="pug">
#map.rounded-2xl(ref="map")
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

export default {
  name: 'Map',
  mounted() {
    const map = L.map(this.$refs.map, {
      center: [60.178745, 24.951394],
      zoom: 16,
      zoomControl: false,
      attributionControl: false,
      dragging: !L.Browser.mobile
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    }).addTo(map)

    L.marker([60.178745, 24.951394]).addTo(map)
  }
}
</script>

<style lang="stylus" scoped>
#map
  height 300px
</style>
