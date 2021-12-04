export const state = () => ({
    todos: [],
    filter: 'all'
  })
  
export const mutations = {
  ADD_TODO (state, todo) {
    state.todos.push(todo)
    localStorage.todos = JSON.stringify(state.todos)
  },
  SET_TODOS (state, todos) {
      state.todos = todos
      localStorage.todos = JSON.stringify(state.todos)
  },
  SET_FILTER (state, filter) {
    state.filter = filter
  },
  CLEAR_COMPLETED (state) {
    state.todos = state.todos.filter(i => !i.completed)
    localStorage.todos = JSON.stringify(state.todos)
  },
  TOGGLE_TODO (state, id) {
    state.todos[id].completed = !state.todos[id].completed
    localStorage.todos = JSON.stringify(state.todos)
  }
}

export const getters = {
  getTodos (state) {
    return state.todos
  },
  getFilter (state) {
    return state.filter
  },
  getTodosLength (state) {
    return state.todos.length
  }
}

export const actions = {
  addTodo ({ commit }, todo) {
    commit('ADD_TODO', todo)
  },
  setTodos ({ commit }, todos) {
    commit('SET_TODOS', todos)
  },
  setFilter ({ commit }, filter) {
    commit('SET_FILTER', filter)
  },
  clearCompleted ({ commit }) {
    commit('CLEAR_COMPLETED')
  },
  toggleTodo ({ commit }, id) {
    commit('TOGGLE_TODO', id)
  }
}
  