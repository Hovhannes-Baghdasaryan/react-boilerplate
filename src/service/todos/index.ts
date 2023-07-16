import { create } from 'zustand'
import { ITodoState } from './types'
import { TodoService } from './actions'
import { EToastVersions, showNotification } from 'libraries'

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
  fetchTodos: async () => {
    try {
      get().setLoading()

      const serviceResponse = await new TodoService().getDetailTodo(5)

      showNotification(EToastVersions.success, 'Todos received successfully')

      get().setData(serviceResponse.data)
    } catch (error: object | any) {
      showNotification(EToastVersions.error, 'Failed to receive todos')

      get().setError(error)
    }
  },
}))

export default useTodos
