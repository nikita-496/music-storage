<template>
  <admin-editor :contents="receivedСontent" />
</template>

<script lang="ts">
import AdminEditor from '../components/form/AdminEditor.vue';
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
    AdminEditor
  }
})
export default class Administartion extends Vue {
  receivedСontent: object[];
}
</script>

<style scoped></style>
