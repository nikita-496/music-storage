<template>
  <form action="admin-editor" @submit.prevent>
    <label class="admin-editor__label" for="titleInput"
      >Заголовок контента</label
    >
    <input
      class="admin-editor__input"
      type="text"
      id="titleInput"
      v-model="title"
    />
    <label class="admin-editor__label" for="textInput" ref="textAreaLabel">
      <br />Текст контента <br />
      <textarea
        class="admin-editor__area"
        type="text"
        name=""
        id="textInput"
        v-model="text[0]"
      />
      <template v-if="textAreas.length">
        <textarea
          v-for="n in textAreas"
          :key="n"
          class="admin-editor__area"
          type="text"
          name=""
          id="textInput"
          v-model="text[n]"
        />
      </template>
      <button class="button admin-editor__button" @click="addTextArea">
        +
      </button>
      <button class="button admin-editor__button" @click="removeTextArea">
        -
      </button>
    </label>
    <label class="admin-editor__label" for="file">Изображение контента</label>
    <file-upload data-test="file-upload-component" @on-change-file="setFile">
      <button @click.prevent>Загрузите изображение</button>
    </file-upload>
    <button class="button admin-editor__button" @click="send">Отправить</button>
  </form>
</template>

<script lang="ts">
import FileUpload from '../FileUpload.vue';
import { contentStub } from '../__tests__/stubs/content.stub';

export default {
  components: { FileUpload },
  data() {
    return {
      title: '',
      text: [],
      textAreas: [],
      picture: null,
    };
  },
  mounted() {
    if (sessionStorage.getItem('textAreas')) {
      this.textAreas = sessionStorage.getItem('textAreas').split(',');
    }
  },
  methods: {
    addTextArea() {
      this.textAreas.push(this.textAreas.length + 1);
      sessionStorage.setItem('textAreas', this.textAreas);
    },
    removeTextArea() {
      this.textAreas.pop();
      sessionStorage.setItem('textAreas', this.textAreas);
    },
    setFile(file) {
      this.picture = file;
    },
    send() {
      const sendContent = contentStub();
      sendContent.title = this.title;
      sendContent.text = this.text;
      sendContent.picture = this.picture;
    },
  },
};
</script>
