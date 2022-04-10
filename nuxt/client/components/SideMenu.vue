<template>
  <aside class="menu">
    <nav class="menu__navigation">
      <div class="menu__list">
        <list :contents="contents"></list>
      </div>
    </nav>
  </aside>
</template>

<script lang="ts">
import List from './List.vue';
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  components: {
    List
  }
})
export default class SideMenu extends Vue {
  @Prop([]) contents: object[];
}
</script>
