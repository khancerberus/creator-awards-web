import classNames from 'classnames'

type ButtonSize = 'small' | 'medium' | 'large'

const sizes: Record<ButtonSize, string> = {
  ['small']: 'px-[25px] py-[8px]',
  ['medium']: 'px-[30px] py-[10px]',
  ['large']: 'px-[35px] py-[12px]'
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize
}

export const Button = ({
  size = 'small',
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const buttonClassNames = classNames(
    className,
    'from-primary-300',
    'to-secondary-900',
    'rounded-full',
    'bg-gradient-to-br',
    'transition-all',
    'duration-300',
    'hover:opacity-70',
    sizes[size]
  )

  return <button className={buttonClassNames} {...props} />
}
