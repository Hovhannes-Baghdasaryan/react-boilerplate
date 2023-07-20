import { EToastVersions, showNotification, Http } from 'libraries'
import { ITodoState } from './types'

class TodoService extends Http {
  async getTodos() {
    return await this.get('todos')
  }

  async getDetailTodo(id: number) {
    return await this.get(`todos/${id}`)
  }
}

export const fetchTodos = async (get: () => ITodoState) => {
  try {
    get().setLoading()

    const serviceResponse = await new TodoService().getDetailTodo(5)

    showNotification(EToastVersions.success, 'Todos received successfully')

    get().setData(serviceResponse.data)
  } catch (error: object | any) {
    showNotification(EToastVersions.error, 'Failed to receive todos')

    get().setError(error)
  }
}
