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
          </div>
        </template>
        <button class="btn text-field__btn" @click.prevent="addTextArea">
          +
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
  @Prop([]) createdText: string;
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
