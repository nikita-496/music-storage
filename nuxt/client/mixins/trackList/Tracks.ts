import { Component, Vue } from 'nuxt-property-decorator';
import { API, getJson } from '../../service/http';
import TrackList from '../../components/TrackList.vue';

@Component({
  async asyncData() {
    let receivedTracks;
    try {
      await getJson(API.track).then((res) => {
        receivedTracks = res.data;
      });
      console.log(receivedTracks);
    } catch (e) {
      console.error(e);
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
export default class Tracks extends Vue {
  private receivedTracks: object[] = [];

  get tracks() {
    return this.receivedTracks
  }

  set tracks(newVal: string) {
    this.receivedTracks = this.filterTracks(newVal)
  }

  public filterTracks(criterion: string) {
    const copy = this.receivedTracks.filter(track => track.tag.includes(criterion)
    ) 
    console.log(copy)
    return copy
  }
}
