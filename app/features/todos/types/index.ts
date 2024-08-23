export interface Todo {
  id: number
  todo: string
  completed: boolean
  userId: number
}

export interface TodoListApiResponse {
  todos: Todo[]
  total: number
  skip: number
  limit: number
}
