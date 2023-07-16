import { Http } from 'libraries'

export class TodoService extends Http {
  async getTodos() {
    return await this.get('todos')
  }

  async getDetailTodo(id: number) {
    return await this.get(`todos/${id}`)
  }
}
