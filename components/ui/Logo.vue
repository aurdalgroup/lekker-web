import { componentNames } from '#build/components';
<template lang="pug">
svg(
  :id="uuid"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 400 400"
  height="100%"
)
  defs
    component(:is="'style'").
      .cls-1 {
        fill: #6c835b;
      }

      .cls-1, .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        transform-origin: center;
      }
  g
    rect.cls-1(
      x="2"
      width="400"
      height="400"
    )
    g.love
      path.cls-2(d="m79.74,185.32v-106.07h13.8v52l39.47-52h14.6l-38.07,50.33,43.4,55.73h-17.27l-42.13-54.07v54.07h-13.8Z")
      path.cls-2(
        d="m175.53,185.32h-13.27l32.67-106.07h14l32.87,106.07h-14.53l-7.27-23.33h-37.33l-7.13,23.33Zm11.6-117.73c-2.31,0-4.3-.82-5.97-2.47-1.67-1.64-2.5-3.64-2.5-6s.84-4.35,2.53-6c1.69-1.64,3.67-2.47,5.93-2.47s4.24.82,5.93,2.47c1.69,1.65,2.53,3.65,2.53,6s-.83,4.36-2.5,6c-1.67,1.65-3.66,2.47-5.97,2.47Zm-1.13,83.8h30.93l-12.8-40.27-3-10.67-2.67,10.67-12.47,40.27Zm30.87-83.8c-2.31,0-4.31-.82-6-2.47-1.69-1.64-2.53-3.64-2.53-6s.86-4.35,2.57-6c1.71-1.64,3.7-2.47,5.97-2.47s4.24.82,5.93,2.47c1.69,1.65,2.53,3.65,2.53,6s-.84,4.36-2.53,6c-1.69,1.65-3.67,2.47-5.93,2.47Z"
      )
      path.cls-2(
        d="m275,140.25v45.07h-13.8v-106.07h28.33c9.24,0,16.06.94,20.43,2.83,4.38,1.89,7.77,4.75,10.17,8.57,2.4,3.82,3.6,7.93,3.6,12.33,0,4.13-.8,8.27-2.4,12.4-1.6,4.13-3.8,7.83-6.6,11.1s-6.84,6.37-12.13,9.3l30.73,49.53h-16.47l-28.07-45.07h-13.8Zm0-10.67h19.33c4.35-2.35,7.59-4.77,9.7-7.23,2.11-2.47,3.71-5.09,4.8-7.87,1.09-2.78,1.63-5.54,1.63-8.3,0-4.98-1.81-8.93-5.43-11.87-3.62-2.93-10.19-4.4-19.7-4.4h-10.33v39.67Z"
      )
      path.cls-2(d="m141.27,308.65v11.67h-57.27v-106.07h13.8v94.4h43.47Z")
      path.cls-2(d="m231.13,308.65v11.67h-57.27v-106.07h56.2v10.67h-42.4v36h38.13v10.6h-38.13v37.13h43.47Z")
      path.cls-2(d="m261.73,320.32v-106.07h13.8v52l39.47-52h14.6l-38.07,50.33,43.4,55.73h-17.27l-42.13-54.07v54.07h-13.8Z")
    g.delicious
      path.cls-2(d="m141.27,173.65v11.67h-57.27v-106.07h13.8v94.4h43.47Z")
      path.cls-2(d="m231.13,173.65v11.67h-57.27v-106.07h56.2v10.67h-42.4v36h38.13v10.6h-38.13v37.13h43.47Z")
      path.cls-2(d="m261.73,185.32v-106.07h13.8v52l39.47-52h14.6l-38.07,50.33,43.4,55.73h-17.27l-42.13-54.07v54.07h-13.8Z")
      path.cls-2(d="m79.74,320.32v-106.07h13.8v52l39.47-52h14.6l-38.07,50.33,43.4,55.73h-17.27l-42.13-54.07v54.07h-13.8Z")
      path.cls-2(d="m231.13,308.65v11.67h-57.27v-106.07h56.2v10.67h-42.4v36h38.13v10.6h-38.13v37.13h43.47Z")
      path.cls-2(
        d="m275,275.25v45.07h-13.8v-106.07h28.33c9.24,0,16.06.95,20.43,2.83,4.38,1.89,7.77,4.74,10.17,8.57,2.4,3.82,3.6,7.93,3.6,12.33,0,4.13-.8,8.27-2.4,12.4-1.6,4.13-3.8,7.83-6.6,11.1-2.8,3.27-6.84,6.37-12.13,9.3l30.73,49.53h-16.47l-28.07-45.07h-13.8Zm0-10.67h19.33c4.36-2.36,7.59-4.77,9.7-7.23,2.11-2.47,3.71-5.09,4.8-7.87,1.09-2.78,1.63-5.54,1.63-8.3,0-4.98-1.81-8.93-5.43-11.87s-10.19-4.4-19.7-4.4h-10.33v39.67Z"
      )
    rect.cls-2(
      y="375"
      width="400"
      height="12"
    )
</template>

<script>
import anime from 'animejs/lib/anime.es.js'

export default {
  name: 'Logo',
  props: {
    animate: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    uuid() {
      return `logo-${this._uid}`
    }
  },
  mounted() {
    if (this.animate === true) {
      anime({
        targets: `svg#${this.uuid} .love .cls-2`,
        duration: 0,
        scale: 0.9,
        opacity: 0
      })

      setTimeout(() => {
        anime({
          targets: `svg#${this.uuid} .delicious .cls-2`,
          duration: 5000,
          scale: 1.1,
          opacity: 0,
          delay: anime.stagger(100)
        })
      }, 2000)

      setTimeout(() => {
        anime({
          targets: `svg#${this.uuid} .love .cls-2`,
          duration: 5000,
          scale: 1,
          opacity: 1,
          delay: anime.stagger(100)
        })
      }, 2500)

      setTimeout(() => {
        anime({
          targets: `svg#${this.uuid} .love .cls-2`,
          duration: 5000,
          scale: 1.1,
          opacity: 0,
          delay: anime.stagger(100)
        })
      }, 5000)

      setTimeout(() => {
        anime({
          targets: `svg#${this.uuid} .delicious .cls-2`,
          duration: 0,
          scale: 0.9,
          opacity: 0
        })
        anime({
          targets: `svg#${this.uuid} .delicious .cls-2`,
          duration: 5000,
          scale: 1,
          opacity: 1,
          delay: anime.stagger(100)
        })
      }, 5500)
    } else {
      anime({
        targets: `svg#${this.uuid} .love .cls-2`,
        duration: 0,
        opacity: 0
      })
      anime({
        targets: `svg#${this.uuid} .delicious .cls-2`,
        duration: 0,
        opacity: 1,
        scale: 1
      })
    }
  }
}
</script>

<style lang="stylus" scoped></style>
