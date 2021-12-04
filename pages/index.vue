<template>
  <div class="container">
    <todo-app/>
  </div>
</template>

<script>
import TodoApp from '~/components/TodoApp.vue'
export default {
  components: { TodoApp },}
</script>

<style>
  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
  }
</style>

<style>
  html, body {
    font-family: monospace;
  }
</style>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
