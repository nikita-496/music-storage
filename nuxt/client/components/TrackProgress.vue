<template>
  <div class="track-progress">
    <span>{{ left }} </span>
    <input
      class="track-progress__scale"
      type="range"
      :value="left"
      @input="
        isVolume
          ? setVolume($event.target.value)
          : setCurrentTime($event.target.value)
      "
      min="leftValue"
      max="right"
    />
    <span>{{ right }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator';
@Component
export default class TrackProgress extends Vue {
  @Prop(Boolean) isVolume: boolean;
  @Prop(Number) left: number;
  @Prop(Number) right: number;

  public setCurrentTime(ev) {
    this.onChnangeCurrentTime(ev);
  }

  public setVolume(ev) {
    this.onChnangeVolume(ev);
  }

  @Emit('handleVolume')
  public onChnangeVolume(val) {}
  @Emit('handleCurrentTime')
  public onChnangeCurrentTime(val) {}
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
