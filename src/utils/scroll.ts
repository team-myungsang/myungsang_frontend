export function setBodyScroll(isEnable: boolean) {
  if (isEnable) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
}
