<template>
  <admin-editor />
</template>

<script lang="ts">
import AdminEditor from '../components/form/AdminEditor.vue';
import { Component, Vue } from 'nuxt-property-decorator';
@Component({
  components: {
    AdminEditor
  }
})
export default class Administartion extends Vue {}
</script>

<style scoped></style>
