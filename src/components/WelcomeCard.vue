<template>
  <section class="welcome-card">
    <h2>Hello, {{ name }}</h2>
    <p :class="{ highlighted: active }">Migration test is ready.</p>
    <button @click="activate">Highlight</button>
  </section>
</template>

<script>
export default {
  name: 'WelcomeCard',
  data() {
    return { name: 'Developer', active: false };
  },
  methods: {
    activate() { this.active = true; }
  },
  mounted() { document.title = this.name; }
};
</script>

<style scoped>
.welcome-card { padding: 24px; }
.highlighted { font-weight: bold; }
</style>
