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
    <main class="main"></main>
    <footer class="footer"></footer>
    <Nuxt />
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.header {
  background-color: rgb(35, 169, 2422);
}
</style>
