import logoSrc from '@/assets/icons/logo-temporal-white.png'

export const Logo = () => {
  return (
    <div className="flex gap-[10px] p-[10px]">
      <img src={logoSrc} alt="Logo creator awards" width={79} height={73}/>
      <h5 className="text-wrap w-[108px] font-medium">Creator Awards</h5>
    </div>
  )
}
