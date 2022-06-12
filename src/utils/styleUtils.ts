export const hexToRGB = (hex: string, alpha: number) => {
  const hexValue = hex.trim()
  const r = parseInt(hexValue.slice(1, 3), 16),
    g = parseInt(hexValue.slice(3, 5), 16),
    b = parseInt(hexValue.slice(5, 7), 16)

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
  }

  return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

export const getStyle = (variable: string) => getComputedStyle(document.querySelector('[data-theme]')!).getPropertyValue(variable)
