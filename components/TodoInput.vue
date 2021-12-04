<template>
  <div class="todo-input">
    <img src="/plus.svg" alt="add" @click="submitTodo">
    <div class="input-wrap">
      <input v-model="inputData" type="text" @keypress.enter="submitTodo">
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "TodoInput",
  data () {
    return {
      inputData: ""
    }
  },
  methods: {
    ...mapActions('todo', ['addTodo']),
    submitTodo() {
      this.inputData = this.inputData.trim()
      if (this.inputData.length > 0) {
        this.addTodo({text: this.inputData, completed: false})
        this.inputData = ""
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.todo-input {
  width: 100%;
  padding: 16px;
  height: 62px;
  display: flex;
  margin-top: var(--todo-input-margin-top, 0px);
  background-color: #00000010;
  border-radius: 4px;
  box-sizing: border-box;
  
  img {
    height: 30px;
    width: 30px;
    border-radius: 4px;

    &:hover {
      background: #00000010;
    }

    &:active {
      background: #00000015;
    }
  }

  .input-wrap {
    height: 30px;
    display: flex;
    flex-grow: 1;
    
    input {
    display: flex;
    flex-grow: 1;
    height: 20px;
    margin: 5px 0 5px 20px;
    padding: 0;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom-color: #00000050;
    background-color: transparent;
    font-size: 20px;
    font-family: monospace;
  
    &:hover {
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom-color: #00000070;
    }

    &:focus-visible {
      border-top: none;
      border-left: none;
      border-right: none;
      outline: none;
      border-bottom-color: #00000080;
    }
  }
  }

  
}
</style>