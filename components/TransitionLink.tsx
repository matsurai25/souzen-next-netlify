import { useTransitionRouterPush } from '@/util/hooks'
import Link from 'next/link'
import { FC, useCallback } from 'react'
import { CSSProperties } from 'styled-components'

type Props = {
  href?: string
  children: React.ReactNode
  className?: string
  style?: CSSProperties
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export const TransitionLink: FC<Props> = ({
  href,
  children,
  className,
  style,
  onClick
}) => {
  const { routerPushWithTransition } =
    useTransitionRouterPush()

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      if (onClick) {
        onClick(e)
      }

      const to = e.currentTarget.href
      routerPushWithTransition(to)
    },
    [routerPushWithTransition, onClick]
  )

  return (
    <Link
      href={href || ''}
      onClick={handleClick}
      className={className}
      style={style}
    >
      {children}
    </Link>
  )
}
