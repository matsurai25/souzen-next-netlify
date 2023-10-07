export const media = {
  pc: '@media screen and (min-width: 768px)',
  mobile: '@media screen and (max-width: 767px)'
}

/**
 * 一定時間停止する
 * @param {number} time
 * @returns
 */
export async function sleep(time: number) {
  return new Promise((res) => {
    return setTimeout(res, time)
  })
}

export const isMobile = () =>
  typeof window === 'undefined'
    ? false
    : window.innerWidth < 768
