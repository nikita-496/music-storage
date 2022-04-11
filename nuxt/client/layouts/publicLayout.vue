<template>
  <div>
    <header class="header">
      <ul class="header__menu">
        <li class="header__menu-item">
          <NuxtLink class="header__link" to="/">Главная</NuxtLink>
        </li>
        <li class="header__menu-item">
          <NuxtLink class="header__link" to="/admin"
            >Панель администратора</NuxtLink
          >
        </li>
        <li class="header__menu-item">
          <NuxtLink class="header__link" to="">Регистрация</NuxtLink>
        </li>
        <li class="header__menu-item">
          <NuxtLink class="header__link" to="">Войти</NuxtLink>
        </li>
      </ul>
    </header>
    <main class="main">
      <side-menu :contents="receivedСontent" />
    </main>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import SideMenu from '../components/SideMenu.vue';
import { Component, Vue } from 'nuxt-property-decorator';
import ContenService from '../service/ContentService';
@Component({
  components: {
    SideMenu
  }
})
export default class PublicLayout extends Vue {
  private receivedСontent: [] = [];
  mounted() {
    ContenService.get().then((r) => (this.receivedСontent = r.data));
  }
}
</script>

<style lang="scss" scoped></style>
