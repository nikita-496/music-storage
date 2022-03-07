<template>
  <div>
    <admin-editor />
    <navbar />
  </div>
</template>

<script lang="ts">
import AdminEditor from '../components/form/AdminEditor.vue';
import Navbar from '../components/Navbar.vue';
import { Component, Vue } from 'nuxt-property-decorator';
@Component({
  components: {
    AdminEditor,
    Navbar
  }
})
export default class Index extends Vue {}
</script>
