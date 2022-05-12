/**
 * @description 큰 단위 숫자 format해주는 함수
 * @example - countFormatter(59245) // 5.9만회
 */
export function countFormatter(viewCount: number) {
  if (viewCount >= 1000 && viewCount < 10000) {
    return `${Math.round(viewCount / 100) / 10}천`;
  }
  if (viewCount >= 10000 && viewCount < 100000) {
    return `${Math.round(viewCount / 1000) / 10}만`;
  }
  if (viewCount >= 100000 && viewCount < 100000000) {
    return `${Math.round(viewCount / 10000)}만`;
  }
  if (viewCount >= 100000000 && viewCount < 1000000000) {
    return `${Math.round(viewCount / 10000000) / 10}억`;
  }
  if (viewCount >= 100000000 && viewCount < 100000000000) {
    return `${Math.round(viewCount / 100000000)}억`;
  }

  return `${viewCount}`;
}
