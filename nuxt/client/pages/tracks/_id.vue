<template>
  <div class="container">
    <action-button>
      <NuxtLink
        class="action-button__content action-button__content_none-decoration"
        slot="text"
        to="/tracks"
        >К списку</NuxtLink
      >
    </action-button>
    <div class="wrapper">
      <img
        сlass="track__image"
        :src="`http://localhost:4000/${track.picture}`"
        alt="Обложка трека"
      />
      <div class="track__info">
        <h4>Название трека - {{ track.name }}</h4>
        <h4>Исполнитель - {{ track.artist }}</h4>
        <h4>Прослушиваний - {{ track.listens }}</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ActionButton from '../../components/ActionButton.vue';
import { Component, Vue } from 'nuxt-property-decorator';
import { API, getJson } from '../../service/http';
@Component({
  async asyncData() {
    let receivedTracks;
    try {
      await getJson(API.track).then((res) => {
        receivedTracks = res.data;
      });
    } catch (e) {
      console.log(e);
    }
    return {
      receivedTracks
    };
  },
  components: { ActionButton },
  layout: 'publicLayout'
})
export default class ID extends Vue {
  private receivedTracks: object[] = [];
  mounted() {
    this.track = this.$route.params.id;
  }
  set track(id: string) {
    this.receivedTracks = this.receivedTracks.filter(
      (track) => track._id === id
    );
  }
  get track() {
    return this.receivedTracks[0];
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  column-gap: 50px;
}
</style>
