let errMessage = ''

export const checkGuessNum = (val) => {
  errMessage = ''
  if(!val) errMessage = '請輸入數字'
  else if (val.length !== 4) errMessage = '長度須為4'
  else if (isNaN(val) || parseInt(val) <= 999) errMessage = '只能輸入數字'
  return errMessage
}
