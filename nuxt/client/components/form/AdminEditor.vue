<template>
  <form action="admin-editor">
    <label class="admin-editor__label" for="titleInput"
      >Заголовок контента</label
    >
    <input
      class="admin-editor__field"
      type="text"
      name=""
      id="titleInput"
      v-model="title"
    />
    <label class="admin-editor__label" for="textInput">Текст контента</label>
    <input
      class="admin-editor__field"
      type="text"
      name=""
      id="textInput"
      v-model="text"
    />
    <label class="admin-editor__label" for="file">Изображение контента</label>
    <file-upload />
    <button class="button admin-editor__button">Отправить</button>
  </form>
</template>

<script lang="ts">
import FileUpload from "../FileUpload.vue";
export default {
  components: { FileUpload },
  data() {
    return {
      title: "",
      text: "",
    };
  },
};
</script>
