<template>
  <div class="todo-list">
    <div class="list-wrap">
      <div v-for="todo in filteredTodos" :key="todo.id" class="todo-entry" @click="toggleTodo(todo.id)">
        <input v-model="todo.completed" class="todo-toggle" type="checkbox" @click.stop="toggleTodo(todo.id)">
        <div class="todo-text">{{todo.text}}</div>
      </div>
    </div>
    <div class="todo-info">
      <div class="todo-left">{{todosLength}} todo(s)</div>
      <div class="todo-option">
        <div class="todo-filter" :class="{'is-active': filter === 'all'}" @click="setFilter('all')">All</div>
        <div class="todo-filter" :class="{'is-active': filter === 'active'}" @click="setFilter('active')">Active</div>
        <div class="todo-filter" :class="{'is-active': filter === 'completed'}" @click="setFilter('completed')">Completed</div>
      </div>
      <div class="todo-clear" @click="clearCompleted()">
        Clear Completed
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "TodoList",
  computed: {
    ...mapGetters('todo', {filter: 'getFilter', todosLength: 'getTodosLength', todos: 'getTodos'}),
    filteredTodos() {
      if (this.filter === 'all') {
        // map is only to save original index
        return this.todos.map((i, index) => { return {...i, id: index} })
      } else if (this.filter === 'completed') {
        return this.todos.map((i, index) => { return {...i, id: index} }).filter(i => i.completed)
      } else if (this.filter === 'active') {
        return this.todos.map((i, index) => { return {...i, id: index} }).filter(i => !i.completed)
      }
      return []
    }
  },
  methods: {
    ...mapActions('todo', ['setFilter', 'clearCompleted', 'toggleTodo'])
  }
}
</script>

<style lang="scss">
.todo-list {
  width: 100%;
  background-color: #00000010;
  border-radius: 4px;
  margin-top: var(--todo-list-margin-top, 0px);

  .list-wrap {
    max-height: 400px;
    overflow: auto;
  }

  .todo-entry {
    width: 100%;
    height: 62px;
    padding: 16px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    font-size: 20px;
    border-bottom: 1px solid #00000020;

    .todo-toggle {
      margin-right: 10px;
      width: 20px;
      height: 20px;
      border-radius: 10px;
    }
    .todo-text  {
      max-width: 534px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

  }

  .todo-info {
    width: 100%;
    height: 62px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
  
    .todo-option {
      display: flex;
      width: 200px;
      justify-content: space-between;
      .todo-filter {
        font-size: 16px;
        color: #00000050;
        cursor: pointer;

        &:hover {
          color: #00000060;
        }
        
        &.is-active {
          color: #29700080;
          font-weight: 700;
        }
      }
    }

    .todo-clear {
        cursor: pointer;
    }
    
  }
}
</style>