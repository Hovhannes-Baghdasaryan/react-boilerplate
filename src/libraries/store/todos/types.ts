export interface ITodoState {
  todoList: { data?: any[] | null; loading: boolean; error?: any }
  fetchTodos: (per_page: number, name: string) => Promise<void>
}
