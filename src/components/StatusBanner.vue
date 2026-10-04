<template>
  <aside class="status-banner">
    <strong v-if="online">Service online</strong>
    <strong v-else>Service offline</strong>
    <button @click="toggle">Toggle status</button>
  </aside>
</template>

<script>
export default {
  name: 'StatusBanner',
  data() {
    return { online: true };
  },
  methods: {
    toggle() { this.online = !this.online; }
  }
};
</script>

<style scoped>
.status-banner { padding: 24px; }
</style>
