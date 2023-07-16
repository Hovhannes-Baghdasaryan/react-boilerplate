export interface ITodoState {
  fetchTodos: () => Promise<void>
  todoList: { data?: any[] | null; loading: boolean; error?: any }
  setError: (error: object) => void
  setData: (responseData: any) => void
  setLoading: () => void
}
