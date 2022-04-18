<template>
  <button
    v-if="isLast"
    :class="isDisabled ? 'disable-button' : 'action-button'"
    @click="send"
    :disabled="isDisabled"
  >
    <slot name="text"></slot>
  </button>
  <button
    v-else
    :class="isDisabled ? 'disable-button' : 'action-button'"
    @click="changeStep"
    :disabled="isDisabled"
  >
    <slot name="text"></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator';
@Component({})
export default class ActionButton extends Vue {
  @Prop(Boolean) isDisabled: boolean;
  @Prop(Boolean) isLast: Boolean;
  @Emit('changeStep')
  public changeStep() {}
  @Emit('send')
  public send() {}
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_vars.scss';
.action-button {
  font-size: 1.05rem;
  background-color: $white;
  border-radius: 6px;
  border: 1px solid $black;
  padding: 0.5em 1.7em;
  cursor: pointer;
  &:hover {
    background-color: $black;
    transition: 0.3s linear;
  }
  &:hover .action-button__content {
    color: $white;
    transition: 0.3s linear;
  }
}
.disable-button {
  font-size: 1.05rem;
  border-radius: 6px;
  padding: 0.5em 1.7em;
}
</style>
