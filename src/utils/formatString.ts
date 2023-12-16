export const truncateString = (str: string, frontLen = 5, endLen = 5): string => {
  const strLen = str.length
  if (frontLen >= strLen || endLen >= strLen) {
    throw new Error('frontLen or endLen short than str length')
  }
  return str.substring(0, frontLen) + '...' + str.substring(str.length - endLen)
}

export const fUpperCaseFirst = (str: string): string => str.replace(/^\S/, s => s.toUpperCase())