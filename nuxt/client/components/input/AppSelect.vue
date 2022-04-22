<template>
  <select class="select" v-model="selected">
    <option value="" disabled>
      {{ genreOptions ? 'Жанры' : 'Теги' }}
    </option>
    <option
      v-for="optionValue in options"
      :key="optionValue"
      :value="optionValue"
    >
      {{ optionValue }}
    </option>
  </select>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from 'nuxt-property-decorator';
@Component
export default class AppSelect extends Vue {
  @Prop(Array) genreOptions: [];
  @Prop(Array) tagOptions: [];
  private options: [] = [];
  private selected: string = '';

  mounted() {
    this.options = this.genreOptions ? this.genreOptions : this.tagOptions;
  }

  @Watch('selected')
  changeSelected(newVal: string) {
    this.onChangeSelected(newVal);
  }
  @Emit('onChangeSelected')
  public onChangeSelected(val: string) {}
}
</script>

<style lang="scss" scoped></style>
