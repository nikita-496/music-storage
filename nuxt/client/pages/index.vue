<template>
  <div>
    <side-menu :contents="receivedСontent" />
  </div>
</template>

<script lang="ts">
import SideMenu from '../components/SideMenu.vue';
import { Component, Vue } from 'nuxt-property-decorator';
import { API, getJson } from '../service/http';
@Component({
  async asyncData() {
    let receivedСontent;
    try {
      await getJson(API.content).then((res) => {
        receivedСontent = res.data;
      });
    } catch (e) {
      console.log(e);
    }

    return {
      receivedСontent
    };
  },
  components: {
    SideMenu
  }
})
export default class Index extends Vue {
  receivedСontent: object[] = [];
}
</script>
