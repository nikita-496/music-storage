<template>
  <input class="input" type="text" :placeholder="value" v-model="inputValue" />
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from 'nuxt-property-decorator';
@Component
export default class AppInput extends Vue {
  @Prop(String) value: string;
  private inputValue: string = '';
  @Watch('inputValue')
  changeInputValue(newVal: string) {
    this.onChangeValue(newVal);
  }
  @Emit('onChangeValue')
  public onChangeValue(val: string) {
    return { val, placeholder: this.value };
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_vars.scss';
.input {
  width: 100%;
  padding: 0.9em 1.5em;
  padding-left: 3em;
  border: 1px solid $second-gray;
  border-radius: 6px;
  outline: none;
}
.input::placeholder {
  font-family: $Lato;
  font-size: 0.9rem;

  color: $black;
  opacity: 0.6;
}
input::-webkit-input-placeholder {
  opacity: 1;
  transition: opacity 0.4s ease;
}
input::-moz-placeholder {
  opacity: 1;
  transition: opacity 0.4s ease;
}
input:-moz-placeholder {
  opacity: 1;
  transition: opacity 0.4s ease;
}
input:-ms-input-placeholder {
  opacity: 1;
  transition: opacity 0.4s ease;
}
input:focus::-webkit-input-placeholder {
  opacity: 0;
  transition: opacity 0.4s ease;
}
input:focus::-moz-placeholder {
  opacity: 0;
  transition: opacity 0.4s ease;
}
input:focus:-moz-placeholder {
  opacity: 0;
  transition: opacity 0.4s ease;
}
input:focus:-ms-input-placeholder {
  opacity: 0;
  transition: opacity 0.4s ease;
}
</style>
