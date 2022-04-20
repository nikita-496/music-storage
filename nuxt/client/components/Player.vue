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
            playerPause
              ? require('../assets/images/icons/play.svg')
              : require('../assets/images/icons/pause.svg')
          "
          :alt="playerPause ? 'Приостановить трек' : 'Запустить трек'"
          @click="handle"
        />
      </div>
      <track-progress
        class="volume__track-progress"
        :left="volume"
        :right="100"
        :isVolume="true"
        @handleVolume="changeVolume"
      />
    </div>
    <div class="player__control player__control_bottom">
      <track-progress
        :left="currentTime"
        :right="duration"
        @handleCurrentTime="changeCurrentTime"
      />
    </div>
  </div>
</template>

<script lang="ts">
import TrackProgress from '../components/TrackProgress.vue';
import { Component, mixins } from 'nuxt-property-decorator';
import audioControl from '../mixins/audioControl';
import { eventBus } from '../eventBus';
@Component({
  mixins: [audioControl],
  components: {
    TrackProgress
  }
})
export default class Player extends mixins(audioControl) {
  get volume() {
    return this.$store.getters['player/getVolume'];
  }
  get duration() {
    return this.$store.getters['player/getDuration'];
  }
  get currentTime() {
    return this.$store.getters['player/getCurrentTime'];
  }
  get trackToPlay() {
    return this.$store.getters['player/getTrack'];
  }

  public changeVolume(ev: any) {
    const numberEv = Number(ev);
    eventBus.$emit('changeVolume', numberEv);
    this.$store.dispatch('player/setVolume', numberEv);
  }
  public changeCurrentTime(ev: any) {
    const numberEv = Number(ev);
    eventBus.$emit('changeCurrentTime', numberEv);
    this.$store.dispatch('player/setCurrentTime', numberEv);
  }
  public handle() {
    eventBus.$emit('changeTrackState');
  }
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
