import { useLocation } from 'react-router-dom'

export const useQuery = () => {
  const { search } = useLocation()

  const query = new URLSearchParams(search)

  const modalType = query.get('modal') || ''
  const token = query.get('token') || ''
  const email = query.get('email') || ''

  return { token, email, modalType }
}
