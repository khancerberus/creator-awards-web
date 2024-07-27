import { useUser } from '@/hooks/useUser'

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID

const twitchAuthUrl = `https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=http://localhost:5173/auth&scope=user:read:email`

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
          className="flex min-w-28 gap-2 rounded-md bg-[#9147ff] px-4 py-2 transition-all duration-200 hover:bg-[#412072]"
        >
          <span>Login</span>
        </button>
      )}
    </>
  )
}
