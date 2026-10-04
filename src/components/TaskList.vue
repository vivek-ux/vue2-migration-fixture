<template>
  <section class="task-list">
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.label }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'TaskList',
  data() {
    return {
      title: 'Tasks',
      tasks: [
        { id: 1, label: 'Review Vue components' },
        { id: 2, label: 'Inspect generated TSX' }
      ]
    };
  }
};
</script>

<style scoped>
.task-list { padding: 24px; }
</style>
