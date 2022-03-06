<template>
  <div>
    <admin-editor />
    <nav-bar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import AdminEditor from '../components/form/AdminEditor.vue';

@Component({
  components: {
    AdminEditor,
  },
})
export default class Index extends Vue {}
</script>
