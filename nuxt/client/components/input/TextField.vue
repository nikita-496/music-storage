<template>
  <div class="text-feild">
    <label class="text-field__label" for="titleInput">
      <br />Заголовок контента <br />
    </label>
    <input
      class="text-field__inpit"
      type="text"
      id="titleInput"
      v-model="title"
    />
    <slot>
      <label class="text-field__inpit" for="textArea" ref="textAreaLabel">
        <br />Текст контента <br />
        <textarea
          class="text-field__area"
          type="text"
          name=""
          id="textArea"
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
        <button class="btn admin-editor__btn" @click.prevent="addTextArea">
          +
        </button>
        <button class="btn admin-editor__btn" @click.prevent="removeTextArea">
          -
        </button>
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
  @Prop([]) textAreas: string[];
  private title: string = '';
  private text: string[] = [''];

  mounted() {
    if (this.createdTitle) {
      this.title = this.createdTitle;
    }
    if (this.createdText) {
      this.text = JSON.parse(this.createdText);
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

  @Emit('onChangeTitle')
  public onChangeTitle(val: string) {}

  @Emit('onChangeText')
  public onChangeText(val: string[]) {}

  @Emit('addTextArea')
  public addTextArea() {}

  @Emit('removeTextArea')
  public removeTextArea() {}
}
</script>

<style lang="scss" scoped></style>
