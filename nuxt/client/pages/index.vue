<template>
  <div>
    <side-menu />
  </div>
</template>

<script lang="ts">
import SideMenu from '../components/SideMenu.vue';
import { Component, Vue } from 'nuxt-property-decorator';
@Component({
  components: {
    SideMenu
  }
})
export default class Index extends Vue {}
</script>
