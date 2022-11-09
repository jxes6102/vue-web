import request from '@/api/index'

export const getData = (inputData) => {
  const url = ''
  const method = 'get'
  const data = {
    Authorization : inputData.Authorization
  }
// Authorization: 'CWB-391D3550-2FAB-43F0-AA4D-06929689EB22'
  return request({
    method,
    url,
    data,
  })
}
