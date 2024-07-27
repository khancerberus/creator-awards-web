import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { useUser } from '@/hooks/useUser'

export const AuthPage = (): React.ReactNode => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const { setUser } = useUser()

  useEffect(() => {
    const code = searchParams.get('code')
    setSearchParams()

    fetch('http://localhost:3000/auth', {
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
