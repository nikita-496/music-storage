<template>
  <div class="text-feild">
    <label class="text-field__label" for="titleInput">
      <br />Заголовок контента <br />
    </label>
    <input
      class="text-field__inpit"
      type="text"
      id="titleInput"
      v-model.trim="title"
    />
    <slot>
      <label class="text-field__input" for="textArea">
        <br />Текст контента <br />
        <textarea
          class="text-field__area"
          type="text"
          id="textArea"
          v-model="text[0]"
          data-index="0"
        />
        <button
          class="btn text-field__btn"
          :disabled="textAreas.length ? false : true"
          data-index="0"
          @click.prevent="removeTextArea"
        >
          -
        </button>
        <file-upload
          :accept="'image/*'"
          :name="'picture'"
          @onChangeFile="sendFile"
        >
          <button @click.prevent>Загрузите изображение</button>
        </file-upload>
        <template v-if="textAreas.length">
          <div v-for="n in textAreas" :key="n">
            <textarea
              class="text-field__area"
              type="text"
              id="textInput"
              v-model="text[n]"
              :data-index="n"
            />
            <button
              class="btn text-field__btn"
              :data-index="n"
              @click.prevent="removeTextArea"
            >
              -
            </button>
            <file-upload @onChangeFile="sendFile">
              <button @click.prevent>Загрузите изображение</button>
            </file-upload>
          </div>
        </template>
        <button class="btn text-field__btn" @click.prevent="addTextArea">
          +
        </button>
      </label>
      <label class="text-field__input" for="textArea">
        <br />Категория контента<br />
        <textarea v-model="tag[0]"></textarea>
      </label>
    </slot>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue, Watch, Emit } from 'nuxt-property-decorator';
@Component
export default class TextField extends Vue {
  @Prop(String) createdTitle: string;
  @Prop([]) createdText: string[];
  @Prop([]) createdTag: string[];
  @Prop([]) textAreas: string[];
  private title: string = '';
  private text: string[] = [''];
  private tag: string[] = [''];

  mounted() {
    this.title = this.createdTitle;

    if (this.createdText) {
      this.text = this.createdText;
    }
    if (this.createdTag) {
      this.tag = this.createdTag;
    }
  }

  @Watch('title')
  titleChanged(newVal: string) {
    this.onChangeTitle(newVal);
  }
  @Watch('text')
  textChanged(newVal: string[]) {
    this.onChangeText(newVal);
  }
  @Watch('tag')
  tagChanged(newVal: string) {
    this.onChangeTag(newVal);
  }
  @Emit('onChangeTitle')
  public onChangeTitle(val: string) {}

  @Emit('onChangeText')
  public onChangeText(val: string[]) {}

  @Emit('onChangeTag')
  public onChangeTag(val: string) {}

  @Emit('addTextArea')
  public addTextArea() {}

  @Emit('removeTextArea')
  public removeTextArea() {}

  @Emit('sendFile')
  public sendFile(file: {}) {}
}
</script>

<style lang="scss" scoped></style>
