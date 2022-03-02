<template>
  <form action="admin-editor">
    <label class="admin-editor__label" for="editorText"
      >Заголовок контента</label
    >
    <input
      class="admin-editor__field"
      type="text"
      name=""
      id="editorText"
      v-model="inputText"
    />
    <button class="button admin-editor__button"></button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
    };
  },
};
</script>
