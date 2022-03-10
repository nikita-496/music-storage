<template>
  <aside class="menu">
    <nav class="menu__navigation">
      <div class="menu__list">
        <list :contents="contents" @onEdit="edit"></list>
      </div>
    </nav>
  </aside>
</template>

<script lang="ts">
import List from './List.vue';
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  components: {
    List
  }
})
export default class SideMenu extends Vue {
  private contents: [] = [];

  mounted() {
    if (localStorage.getItem('createdContent')) {
      this.contents = JSON.parse(localStorage.getItem('createdContent'));
    }
  }
}
</script>
