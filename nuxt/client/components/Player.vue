<template>
  <div class="player">
    <div class="player__control player__control_top">
      <div>
        <div class="player__image-wrapper">
          <img
            class="track-item__image-like"
            src="../assets/images/icons/icons8-сердце-48.png"
            alt="Нравится"
          />
        </div>
      </div>
      <div>
        <img
          class="track-item__image-state"
          :src="
            isActive
              ? require('../assets/images/icons/pause.svg')
              : require('../assets/images/icons/play.svg')
          "
          :alt="isActive ? 'Приостановить трек' : 'Запустить трек'"
        />
      </div>
      <track-progress class="volume__track-progress" :left="0" :right="100" />
    </div>
    <div class="player__control player__control_bottom">
      <track-progress :left="0" :right="100" />
    </div>
  </div>
</template>

<script lang="ts">
import TrackProgress from '../components/TrackProgress.vue';
import { Component, Vue } from 'nuxt-property-decorator';
@Component({
  components: {
    TrackProgress
  }
})
export default class Player extends Vue {
  private isActive: boolean = false;
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_vars.scss';
.player {
  height: 80px;
  width: 50%;
  position: fixed;
  left: 26%;
  bottom: 2.8em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  padding: 0 10px;
  background-color: $white;
}
.player__control_top {
  display: flex;
  width: 90%;
  margin-top: 0.5em;
  justify-content: space-between;
}
.player__control_bottom {
  width: 90%;
}
.volume__track-progress {
  width: 20%;
}
.player__image-wrapper {
  width: 35px;
  height: 35px;
  border-radius: 6px;
  background-color: $body-bg;
}
.track-item__image-like {
  position: relative;
  top: 0.25em;
  left: 0.15em;
  width: 30px;
  height: 30px;
}
</style>
