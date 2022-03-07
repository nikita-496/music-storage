<template>
  <nav class="navbar">
    <img class="navbar__logo" src="" alt="" />
    <div class="navbar__list">
      <list :contents="contents"></list>
    </div>
  </nav>
</template>

<script lang="ts">
import List from './List.vue';
import { eventBus } from '../eventBus';
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  components: {
    List
  }
})
export default class Navbar extends Vue {
  private contents: [] = [];

  mounted() {
    eventBus.$on('transfer', (stateContent) =>
      Navbar.navbarStateHandler(stateContent, this.contents)
    );
    if (localStorage.getItem('navbar')) {
      this.contents = JSON.parse(localStorage.getItem('navbar'));
    }
  }

  static navbarStateHandler(stateContent, content) {
    content.push(stateContent);
    localStorage.setItem('navbar', JSON.stringify(content));
  }
}
</script>
