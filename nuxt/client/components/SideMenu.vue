<template>
  <aside :class="isOpen ? 'menu_opened' : 'menu_closed'">
    <img
      :class="isOpen ? 'image image_close' : 'image image_open'"
      :src="
        isOpen
          ? require('../assets/images/icons/close-bar.svg')
          : require('../assets/images/icons/open-bar.svg')
      "
      alt="close-bar"
      @click="changeSidebar"
    />
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
  @Prop([]) isOpen: boolean;
  public changeSidebar() {
    const sidebarStatus = this.isOpen;
    this.$emit('changeSidebar', !sidebarStatus);
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_vars.scss';
@import '../assets/scss/_media/publicLayout.scss';
@import '../assets/scss/_animations/sideMenu.scss';

.menu_closed {
  animation-duration: 0.8s;
  animation-name: slidein;
  width: 50%;
}
.menu_opened {
  animation-duration: 0.8s;
  animation-name: slideout;
  width: 100%;
}
@include changeSideMenuView();

.image {
  position: relative;
  top: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.image_close {
  left: 180px;
  animation-duration: 0.8s;
  animation-name: movein;
}
.image_open {
  left: 80px;
  animation-duration: 0.8s;
  animation-name: moveout;
}
@include movingImage();

@include hideSidebars();
</style>
