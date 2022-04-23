<template>
  <div class="wrapper">
    <div
      class="carousel"
      :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
    >
      <div class="carousel__item">
        <carousel-item
          v-for="(carouselItem, index) in carouselData"
          :key="carouselItem._id"
          :carouselItem="carouselItem"
          :index="index % 2"
        />
      </div>
    </div>
    <div class="action">
      <action-button
        @changeStep="decrease"
        :isDisabled="currentSlideIndex === 0 ? true : false"
      >
        <span slot="text">Назад</span>
      </action-button>
      <div class="action_point">
        <span
          v-for="n in Math.ceil(carouselData.length / 2)"
          :key="n"
          :class="
            n - 1 === currentSlideIndex
              ? 'action_point-circle action_point-circle_active'
              : 'action_point-circle'
          "
        >
        </span>
      </div>
      <action-button
        @changeStep="enlarge"
        :isDisabled="
          currentSlideIndex === Math.floor(carouselData.length / 2) - 1
            ? true
            : false
        "
      >
        <span slot="text">Вперед</span>
      </action-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import ActionButton from '../../components/ActionButton.vue';
import CarouselItem from './CarouselItem.vue';
@Component({
  components: {
    ActionButton,
    CarouselItem
  }
})
export default class Carousel extends Vue {
  @Prop([]) carouselData: object[];
  @Prop(Number) interval: number;
  private currentSlideIndex: number = 0;

  mounted() {
    if (this.interval > 0) {
      const self = this;
      setInterval(function () {
        self.enlarge();
      }, self.interval);
    }
  }

  public enlarge() {
    if (
      this.currentSlideIndex >= Math.floor((this.carouselData.length - 1) / 2)
    ) {
      this.currentSlideIndex = 0;
    } else {
      this.currentSlideIndex++;
    }
  }
  public decrease() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_vars.scss';
.wrapper {
  max-width: 800px;
  overflow: hidden;
  margin: 0 auto;
}
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ease 0.5s;
}
.carousel__item {
  width: 100%;
  display: flex;
}
.action {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 2em;
}
.action_point-circle:before {
  content: ' \25CF';
  font-size: 20px;
  color: $second-gray;
}
.action_point-circle_active:before {
  color: $gray;
}
</style>
