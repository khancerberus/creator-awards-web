import express, { ErrorRequestHandler, type RequestHandler } from 'express'
import cors from 'cors'
import { expressjwt } from 'express-jwt'
import jwt from 'jsonwebtoken'
import morgan from 'morgan'
import 'dotenv/config'

const PORT = process.env.PORT ?? 3000
const TWITCH_AUTH_URL = 'https://id.twitch.tv/oauth2/token'
const CLIENT_ID = process.env.CLIENT_ID ?? ''
const CLIENT_SECRET = process.env.CLIENT_SECRET ?? ''
const GRANT_TYPE = 'authorization_code'
const REDIRECT_URI = 'http://localhost:3000'

console.log('CLIENT_ID', CLIENT_ID)
console.log('CLIENT_SECRET', CLIENT_SECRET)

const app = express()
app.use(express.json())
app.use(cors({
  origin: '*',
}))
app.use(morgan('dev'))

app.use(
  expressjwt({
    secret: 'secret',
    algorithms: ['HS256'],
    credentialsRequired: true
  }).unless({ path: ["/auth", "/"] })
)

app.use(((err: any, _req: any, res: any, next: any) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
      message: 'Token inválido'
    })
  }

  next(err)
}) as RequestHandler)

app.get('/', (_req, res) => {
  res.send('Hello World')
})

app.post('/auth', async (req, res) => {
  const { code } = req.body
  
  if (!code) {
    res.status(400).json({ message: 'Code is required' })
    return
  }

  const authUrl = `${TWITCH_AUTH_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}&grant_type=${GRANT_TYPE}&redirect_uri=${REDIRECT_URI}`

  console.log('consultando...', authUrl)

  const response = await fetch(authUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())

  const { access_token } = response

  const response2 = await fetch('https://api.twitch.tv/helix/users', {
    method: 'GET',
    headers: {
      'Client-Id': CLIENT_ID,
      Authorization: `Bearer ${access_token}`
    }
  })
    .then((res) => res.json())

    console.log(JSON.stringify(response2))

  const authToken = jwt.sign({
    twitchId: response2.data[0].id
  }, 'secret', {
    expiresIn: '24h'
  })
  const user = {
    id: response2.data[0].id,
    displayName: response2.data[0].display_name,
    profileImageUrl: response2.data[0].profile_image_url
  }
  res.json({ authToken, user })
})

app.get('/protected', (_req, res) => {
  res.json({
    id: '123',
    displayName: 'test',
    profileImageUrl: 'https://via.placeholder.com/150'
  })
})

app.use(((error, _req, res, _next) => {
  console.error(error)
  res.status(500).json({ message: 'Internal server error' })
}) as ErrorRequestHandler)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
