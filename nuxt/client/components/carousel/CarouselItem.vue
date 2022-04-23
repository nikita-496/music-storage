<template>
  <div class="carousel-item">
    <img
      сlass="carousel-item__imgae"
      :src="`http://localhost:4000/${carouselItem.picture}`"
      :alt="carouselItem.title"
      :style="
        index
          ? {
              width: '300px',
              height: '205px',
              'margin-left': '1em'
            }
          : { width: '300px', 'margin-left': '6.3em', height: '205px' }
      "
    />
    <div
      :class="
        index
          ? 'carousel-item__content carousel-item__content_honest'
          : 'carousel-item__content carousel-item__content_odd'
      "
    >
      <p class="carousel-item__content-text">{{ carouselItem.title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
@Component({})
export default class CarouselItem extends Vue {
  @Prop([]) carouselItem: object;
  @Prop(Number) index: boolean;
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_vars.scss';
.carousel-item {
  position: relative;
  flex: 1;
}
.carousel-item__content {
  position: absolute;
  left: 50px;
  top: 20px;
  z-index: 1000;
}
.carousel-item__content_odd {
  left: 130px;
}
.carousel-item__content_honest {
  left: 50px;
}
.carousel-item__content-text {
  color: $white;
}
</style>
