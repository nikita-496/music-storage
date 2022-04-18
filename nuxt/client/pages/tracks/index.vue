<template>
  <main class="main">
    <div class="container">
      <div class="card-tracks">
        <h2 class="title">Список всех треков</h2>
        <track-list :tracks="receivedTracks" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import TrackList from '../../components/TrackList.vue';
import { Component, Vue } from 'nuxt-property-decorator';
import { API, getJson } from '../../service/http';
@Component({
  async asyncData() {
    let receivedTracks;
    try {
      await getJson(API.track).then((res) => {
        receivedTracks = res.data;
      });
      console.log(receivedTracks);
    } catch (e) {
      console.log(e);
    }
    return {
      receivedTracks
    };
  },
  layout: 'publicLayout',
  components: {
    TrackList
  }
})
export default class Index extends Vue {
  private receivedTracks: object[] = [];
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_vars.scss';
.card-tracks {
  background-color: $white;
}
</style>
