import { useUser } from '@/hooks/useUser'
import twitchIcon from '@/assets/icons/twitch-icon-white.png'

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const REDIRECT_HOST = import.meta.env.VITE_REDIRECT_HOST

const twitchAuthUrl = `https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_HOST}/auth&scope=user:read:email`

export const TwitchButton = (): React.ReactNode => {
  const { user } = useUser()

  const handleClick = (): void => {
    window.location.href = twitchAuthUrl
  }

  return (
    <>
      {user ? (
        <img src={user.profileImageUrl} width={50} className="rounded-full" />
      ) : (
        <button
          onClick={handleClick}
          className="flex gap-[10px] rounded-md px-[30px] py-[10px] transition-all duration-200 border twitch-button"
        >
          <img src={twitchIcon} alt="Twitch icon" width={20} />
          <p>Iniciar sesión</p>
        </button>
      )}
    </>
  )
}
