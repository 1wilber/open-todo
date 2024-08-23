import { TodoListApiResponse } from "../types"

const url = "https://dummyjson.com/todos?delay=1500"

export const getTodos = async (): Promise<TodoListApiResponse> => {
  try {
    const promise = await fetch(url)
    const data = await promise.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

