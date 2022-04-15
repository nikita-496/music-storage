<template>
  <div class="layout">
    <header class="header">
      <search class="search header__search" />
    </header>
    <side-menu
      class="menu"
      :contents="receivedСontent"
      :isOpen="isOpen"
      @changeSidebar="changeStatus"
    />
    <main class="main"></main>
    <side-menu class="aside" :contents="receivedСontent" />
    <footer class="footer">
      <p class="footer__coopy">
        &copy; {{ new Date().getFullYear() }} Все права защищены
      </p>
    </footer>
    <Nuxt class="nuxt" />
  </div>
</template>

<script lang="ts">
import Search from '../components/input/Search.vue';
import SideMenu from '../components/SideMenu.vue';
import { Component, Vue } from 'nuxt-property-decorator';
import ContenService from '../service/ContentService';
import { eventBus } from '../eventBus';
@Component({
  components: {
    Search,
    SideMenu
  }
})
export default class PublicLayout extends Vue {
  private receivedСontent: [] = [];
  private isOpen: boolean = true;
  mounted() {
    ContenService.get().then((r) => (this.receivedСontent = r.data.reverse()));
  }
  public changeStatus(value) {
    this.isOpen = value;
    eventBus.$emit('change', this.isOpen);
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_vars.scss';
@import '../assets/scss/_media/publicLayout.scss';

.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  /*grid-template-columns: minmax(100px, 230px) minmax(500px, 1200px) minmax(
      100px,
      230px
    );*/
  grid-template-columns: 230px 1fr 230px;
  grid-template-areas:
    'menu header aside'
    'menu main aside'
    'footer footer footer';
  height: 100vh;
}
.header {
  display: flex;
  justify-content: space-around;
  grid-area: header;
}
.header__search {
  width: 20em;
}
.menu {
  grid-area: menu;
  background-color: $white;
}
.main {
  grid-area: main;
}
.aside {
  grid-area: aside;
  background-color: $white;
}
.footer {
  grid-area: footer;
  background-color: $black;
}
.footer__coopy {
  color: $white;
}
.nuxt {
  display: none;
}
@include changeSizeLayout();
</style>
