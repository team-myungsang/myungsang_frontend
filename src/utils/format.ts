export function viewCountFormatter(viewCount: number) {
  if (viewCount < 1000) {
    return `${viewCount}회`;
  }
  if (viewCount >= 1000 && viewCount < 10000) {
    return `${Math.round(viewCount / 100) / 10}천회`;
  }
  if (viewCount >= 10000 && viewCount < 100000) {
    return `${Math.round(viewCount / 1000) / 10}만회`;
  }
  if (viewCount >= 100000 && viewCount < 100000000) {
    return `${Math.round(viewCount / 10000)}만회`;
  }
  if (viewCount >= 100000000 && viewCount < 1000000000) {
    return `${Math.round(viewCount / 10000000) / 10}억회`;
  }
  if (viewCount >= 100000000 && viewCount < 100000000000) {
    return `${Math.round(viewCount / 100000000)}억회`;
  }

  return `${viewCount}회`;
}
