import { useRouter } from 'next/router'
import { useCallback } from 'react'

export const useViewTransition = <
  T extends (...args: any[]) => void
>(
  callback: T
) => {
  const startViewTransition = (...args: Parameters<T>) => {
    if (!(document as any).startViewTransition) {
      callback(...args)
      return
    }

    ;(document as any).startViewTransition(async () => {
      await Promise.resolve(callback(...args))
    })
  }
  return { startViewTransition }
}

export const useTransitionRouterPush = () => {
  const router = useRouter()
  const routerPush = useCallback(
    async (to: string) => {
      await router.push(to)
    },
    [router]
  )
  const { startViewTransition: routerPushWithTransition } =
    useViewTransition(routerPush)

  return { routerPushWithTransition }
}
