import { useEffect, type FC } from 'react'
import useTodos from 'service/todos'

const HomeContainer: FC = () => {
  const { fetchTodos, todoList } = useTodos()

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <section>
      Home Container,{' '}
      {JSON.stringify({ data: todoList.data, loading: todoList.loading, error: todoList.error?.message })}
    </section>
  )
}

export default HomeContainer
