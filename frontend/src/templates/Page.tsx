import classNames from 'classnames'

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Page = ({ children, className, ...props }: PageProps): JSX.Element => {
  const pageClassNames = classNames('absolute top-6 bottom-0 left-0 right-0', className)

  return (
    <main className={pageClassNames} {...props}>
      {children}
    </main>
  )
}
