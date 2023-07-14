import axios from 'axios'
import { create } from 'zustand'
import { ITodoState } from './types'

const useTodos = create<ITodoState>(set => ({
  todoList: {
    data: null,
    error: null,
    loading: false,
  },
  fetchTodos: async (per_page: number, name: string) => {
    try {
      set(state => ({ todoList: { ...state.todoList, loading: true } }))

      const { data } = await axios.get('https://api.github.com/search/users', { params: { q: name, per_page } })

      set({ todoList: { loading: false, data } })
    } catch (error) {
      set({ todoList: { loading: false, error, data: null } })
    }
  },
}))

export default useTodos
