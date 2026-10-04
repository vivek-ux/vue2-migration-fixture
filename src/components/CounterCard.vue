<template>
  <section class="counter-card">
    <h2>{{ title }}</h2>
    <p v-if="count > 0">Clicks: {{ count }}</p>
    <p v-else>No clicks yet</p>
    <button @click="increment">Add click</button>
  </section>
</template>

<script>
export default {
  name: 'CounterCard',
  data() {
    return { title: 'Counter', count: 0 };
  },
  methods: {
    increment() { this.count += 1; }
  }
};
</script>

<style scoped>
.counter-card { padding: 24px; }
</style>
