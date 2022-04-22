<template>
  <multiselect
    class="select"
    v-model="selected"
    :options="options"
    :multiple="true"
    :close-on-select="false"
    :clear-on-select="false"
    :preserve-search="true"
    :placeholder="genreOptions ? 'Выбрать жанр(ы)' : 'Выбрать тег(и)'"
    :preselect-first="true"
    :optionHeight="100"
  >
    <template slot="selection" slot-scope="{ values, search, isOpen }"
      ><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen"
        >{{ values.length }} options selected</span
      ></template
    >
  </multiselect>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from 'nuxt-property-decorator';
import Multiselect from 'vue-multiselect';
@Component({
  components: {
    Multiselect
  }
})
export default class AppSelect extends Vue {
  @Prop(Array) genreOptions: [];
  @Prop(Array) tagOptions: [];
  private options: [] = [];
  private selected: [] = [];

  mounted() {
    this.options = this.genreOptions ? this.genreOptions : this.tagOptions;
  }

  @Watch('selected')
  changeSelected(newVal: []) {
    this.onChangeSelected(newVal);
  }
  @Emit('onChangeSelected')
  public onChangeSelected(val: []) {}
}
</script>

<style lang="scss" scoped>
.multiselect--active {
  height: 2em !important;
}
</style>
