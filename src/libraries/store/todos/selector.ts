import { ITodoState } from './types'

export const todoListSelector = (state: ITodoState) => state.todoList
