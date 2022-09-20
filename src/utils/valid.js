let errMessage = ''

export const checkGuessNum = (val) => {
  errMessage = ''
  if(!val) errMessage = '請輸入數字'
  else if (val.length !== 4) errMessage = '長度須為4'
  else if (isNaN(val)) errMessage = '只能輸入數字'
  // else if (val.split('').some(x => val.split('').indexOf(x) !== val.split('').lastIndexOf(x))) errMessage = '數字不能重覆'
  else if (new Set(val.split('')).size !== val.split('').length) errMessage = '數字不能重覆'
  return errMessage
}
