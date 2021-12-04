<template>
  <div class="todo-container">
    <div class="todo-title">
      TODO
    </div>
    <todo-input/>
    <todo-list/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TodoInput from './TodoInput.vue'
import TodoList from './TodoList.vue'
export default {
  name: "TodoApp",
  components: { TodoInput, TodoList },
  mounted() {
    if (localStorage.todos) {
      this.setTodos(JSON.parse(localStorage.todos))
    }
  },
  methods: {
    ...mapActions('todo', ['setTodos'])
  }
}
</script>
<style lang="scss" scoped>
  .todo-container {
    width: 600px;
    margin: 150px auto;
    display: flex;
    flex-direction: column;

    .todo-title {
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 35px;
      font-weight: 700;
      letter-spacing: 10px;
    }

    --todo-input-margin-top: 30px;
    --todo-list-margin-top: 30px;
  }
</style>