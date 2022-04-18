<template>
  <div class="track-progress">
    <span>{{ left }} </span>
    <input
      class="track-progress__scale"
      type="range"
      v-model="left"
      min="left"
      max="right"
    />
    <span>{{ right }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
@Component
export default class TrackProgress extends Vue {
  @Prop(Number) left: number;
  @Prop(Number) right: number;
}
</script>

<style lang="scss" scoped>
.track-progress {
  display: flex;
  width: 100%;
}
.track-progress__scale {
  width: 100%;
}
</style>
