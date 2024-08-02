import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { useUser } from '@/hooks/useUser'

const API_HOST = import.meta.env.VITE_API_HOST

export const AuthPage = (): React.ReactNode => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const { setUser } = useUser()

  useEffect(() => {
    const code = searchParams.get('code')
    setSearchParams()

    fetch(`${API_HOST}/auth`, {
      method: 'POST',
      body: JSON.stringify({
        code: code
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        res.json().then((data) => {
          localStorage.setItem('authToken', data.authToken)
          setUser(data.user)
        })
      })
      .then(console.log)
      .finally(() => {
        navigate('/')
      })
  }, [])

  return <div></div>
}
