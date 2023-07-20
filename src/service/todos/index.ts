import { create } from 'zustand'
import { ITodoState } from './types'
import { fetchTodos } from './actions'

const useTodos = create<ITodoState>((set, get) => ({
  todoList: {
    data: null,
    error: null,
    loading: false,
  },
  setData: (responseData: any[]) => {
    set(() => ({ todoList: { data: responseData, loading: false, error: false } }))
  },
  setLoading: () => {
    set(state => ({ todoList: { ...state.todoList, loading: true } }))
  },
  setError: (error: object) => {
    set(state => ({ todoList: { ...state.todoList, loading: false, error } }))
  },
  fetchTodos: async () => await fetchTodos(get),
}))

export default useTodos
