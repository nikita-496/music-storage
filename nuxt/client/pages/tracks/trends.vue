<template>
  <main class="main">
    <div class="container">
      <h1 class="title">Тренды</h1>
      <div class="preview">
        <p>Плейлист</p>
        <h3>Лучшие песни недели</h3>
        <action-button>
          <p class="action-button__content" slot="text">Слушать</p>
        </action-button>
        <action-button>
          <p class="action-button__content" slot="text">Показать плейлист</p>
        </action-button>
      </div>
    </div>
  </main>
</template>

<script>
import ActionButton from '../../components/ActionButton.vue';
export default {
  comonents: {
    ActionButton
  },
  name: 'trends',
  layout: 'publicLayout'
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_vars.scss';
.container {
  padding: 0 4em;
}
.preview {
  width: 50%;
  background-color: rgb(16, 84, 163);
}
</style>
